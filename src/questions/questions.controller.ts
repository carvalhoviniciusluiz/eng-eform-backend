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
import { Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import { QuestionPaginateDTO, QuestionPaginateResponseDto, QuestionRequestDTO } from '~/questions/dtos';
import { QuestionsService } from '~/questions/questions.service';

@ApiTags('Questions')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('surveys/:surveyId/questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(
    @Param('surveyId') surveyId: string,
    @Query() params: QuestionPaginateDTO
  ): Promise<QuestionPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { name: 'asc' }, content } = params;
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
      throw new BadRequestException();
    }
  }

  @Get('/:id')
  async getQuestion(@Param('id') id: string): Promise<QuestionModel> {
    return this.questionService.getQuestion({
      id
    });
  }

  @Post()
  async createQuestion(
    @Param('surveyId') surveyId: string,
    @Body() questionData: QuestionRequestDTO
  ): Promise<QuestionModel> {
    const { content } = questionData;
    return this.questionService.create({
      content,
      survey: {
        connect: {
          id: surveyId
        }
      }
    });
  }

  @Patch('/:id')
  async updateQuestion(
    @Param('surveyId') surveyId: string,
    @Param('id') id: string,
    @Body() questionData: QuestionRequestDTO
  ): Promise<QuestionModel> {
    const { content } = questionData;
    return this.questionService.update({
      where: {
        id
      },
      data: {
        content,
        survey: {
          connect: {
            id: surveyId
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