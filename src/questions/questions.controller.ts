import {
  BadRequestException,
  Body,
  CacheInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Question as QuestionModel } from '@prisma/client';
import { AppLogger } from '~/app.logger';
import { Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import {
  QuestionPaginateDTO,
  QuestionPaginateResponseDto,
  QuestionRequestDTO,
  QuestionResponseDto
} from '~/questions/dtos';
import { QuestionsService } from '~/questions/questions.service';

type Answer = {
  id?: string;
  content: string;
};

@ApiTags('Questions')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('surveys/:surveyId/questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService, private readonly logger: AppLogger) {
    this.logger.setContext(QuestionsController.name);
  }

  reportLoggerAndThrowException(error: any) {
    this.logger.fail({
      code: error.code,
      message: error?.meta?.cause ?? error?.message,
      error: error.stack
    });
    throw new BadRequestException();
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(
    @Param('surveyId') surveyId: string,
    @Query() params: QuestionPaginateDTO
  ): Promise<QuestionPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { content: 'asc' }, content } = params;
    const hasContent = !!content;
    const options = hasContent
      ? {
          where: {
            content: {
              startsWith: content
            },
            surveyId
          }
        }
      : {
          where: {
            surveyId
          },
          skip,
          take,
          orderBy
        };

    try {
      const { questions, count } = await this.questionService.getAll(options);
      return new QuestionPaginateResponseDto(questions, take, skip, count);
    } catch (error) {
      this.reportLoggerAndThrowException(error);
    }
  }

  @Get('/:id')
  async getQuestion(@Param('id') id: string): Promise<QuestionResponseDto> {
    try {
      const question = await this.questionService.getQuestion({
        id
      });

      return new QuestionResponseDto(question);
    } catch (error) {
      this.reportLoggerAndThrowException(error);
    }
  }

  @Post()
  async createQuestion(
    @Param('surveyId') surveyId: string,
    @Body() questionData: QuestionRequestDTO
  ): Promise<QuestionResponseDto> {
    const { content, answers } = questionData;
    try {
      const params = {
        survey: {
          connect: {
            id: surveyId
          }
        },
        content,
        type: answers.type,
        answers: {
          create: answers.data
        }
      };
      const question = await this.questionService.create(params);

      return new QuestionResponseDto(question);
    } catch (error) {
      this.reportLoggerAndThrowException(error);
    }
  }

  @Patch('/:id')
  async updateQuestion(
    // @Param('surveyId') surveyId: string,
    @Param('id') id: string,
    @Body() questionData: QuestionRequestDTO
  ): Promise<QuestionModel> {
    const {
      content,
      answers: { data: answers, type }
    } = questionData;
    try {
      const upsert = answers?.map((answer: Answer) => ({
        where: {
          id: answer.id ?? ''
        },
        create: {
          content: answer.content
        },
        update: {
          content: answer.content
        }
      }));
      const params = {
        where: {
          id
        },
        // survey: {
        //   connect: {
        //     id: surveyId
        //   }
        // },
        data: {
          content,
          type,
          answers: {
            upsert
          }
        }
      };

      return await this.questionService.update(params);
    } catch (error) {
      this.reportLoggerAndThrowException(error);
    }
  }

  @Delete('/:id')
  async deleteQuestion(@Param('id') id: string): Promise<QuestionModel> {
    return this.questionService.delete({ id });
  }
}
