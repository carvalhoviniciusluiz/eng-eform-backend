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

@ApiTags('Questions')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('surveys/:surveyId/questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService, private readonly logger: AppLogger) {
    this.logger.setContext(QuestionsController.name);
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
      this.logger.fail({
        code: error.code,
        message: error?.meta?.cause,
        error: error.stack
      });
      throw new BadRequestException();
    }
  }

  @Get('/:id')
  async getQuestion(@Param('id') id: string): Promise<QuestionResponseDto> {
    const question = await this.questionService.getQuestion({
      id
    });

    return new QuestionResponseDto(question);
  }

  @Post()
  async createQuestion(
    @Param('surveyId') surveyId: string,
    @Body() questionData: QuestionRequestDTO
  ): Promise<QuestionResponseDto> {
    const { content, answers } = questionData;
    try {
      const question = await this.questionService.create({
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
      });

      return new QuestionResponseDto(question);
    } catch (error) {
      this.logger.fail({
        code: error.code,
        message: error?.meta?.cause,
        error: error.stack
      });
      throw new BadRequestException();
    }
  }

  @Patch('/:id')
  async updateQuestion(
    @Param('surveyId') surveyId: string,
    @Param('id') id: string,
    @Body() questionData: QuestionRequestDTO
  ): Promise<QuestionModel> {
    return this.questionService.update({
      where: {
        id: '269b8a8e-d8a7-4fe4-aa62-fd920b0246f7'
      },
      data: {
        content: 'content+1',
        answers: {
          connectOrCreate: [
            {
              where: {
                id: 'a43cd6ec-18d2-4bea-9a9f-f797485006a8'
              },
              create: {
                content: 'content+5'
              }
            },
            {
              where: {
                id: ''
              },
              create: {
                content: 'bla bla bla+etc'
              }
            }
          ]
        },
        survey: {
          connect: {
            id: 'f734f9c7-f1f6-4100-9b7b-657d12e202c1'
          }
        }
      }
    });
  }

  @Delete('/:id')
  async deleteQuestion(@Param('id') id: string): Promise<QuestionModel> {
    return this.questionService.delete({ id });
  }
}
