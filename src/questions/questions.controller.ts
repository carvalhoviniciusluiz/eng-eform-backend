import {
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
import { Prisma, Question as QuestionModel } from '@prisma/client';
import { AppLogger } from '~/app.logger';
import { BaseController } from '~/common/controllers/base.controller';
import { Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import { FormsService } from '~/forms/forms.service';
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
@Controller('forms/:formId/questions')
export class QuestionsController extends BaseController {
  constructor(
    private readonly formService: FormsService,
    private readonly questionService: QuestionsService,
    readonly logger: AppLogger
  ) {
    super(logger, QuestionsController.name);
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(
    @Param('formId') formId: string,
    @Query() params: QuestionPaginateDTO
  ): Promise<QuestionPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { content: 'asc' }, content } = params;
    const hasContent = !!content;
    const parentId = null as any;
    const options: Prisma.QuestionFindManyArgs = hasContent
      ? {
          where: {
            content: {
              startsWith: content
            },
            formId,
            parentId
          }
        }
      : {
          where: {
            formId,
            parentId
          },
          skip,
          take,
          orderBy
        };
    try {
      const form = await this.formService.getForm({ id: formId }, true);
      const { questions, count } = await this.questionService.getAll(options);
      return new QuestionPaginateResponseDto({
        form,
        parent: null,
        rows: questions,
        count: take,
        page: skip,
        pageSize: count
      });
    } catch (error) {
      this.reportLoggerAndThrowException(error);
    }
  }

  @UseInterceptors(CacheInterceptor)
  @Get('/:questionId/questions')
  async getChildren(
    @Param('formId') formId: string,
    @Param('questionId') questionId: string,
    @Query() params: QuestionPaginateDTO
  ): Promise<QuestionPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { content: 'asc' }, content } = params;
    const hasContent = !!content;
    const parentId = questionId;
    const options: Prisma.QuestionFindManyArgs = hasContent
      ? {
          where: {
            content: {
              startsWith: content
            },
            formId,
            parentId
          }
        }
      : {
          where: {
            formId,
            parentId
          },
          skip,
          take,
          orderBy
        };
    try {
      const questionsShow = true;
      const form = await this.formService.getForm({ id: formId }, questionsShow);
      const parent = await this.questionService.getQuestion({ id: questionId });
      const { questions, count } = await this.questionService.getAll(options);
      return new QuestionPaginateResponseDto({
        form,
        parent,
        rows: questions,
        count: take,
        page: skip,
        pageSize: count
      });
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
      this.reportLoggerAndThrowException(error, {
        id
      });
    }
  }

  @Post()
  async createQuestion(
    @Param('formId') formId: string,
    @Body() questionData: QuestionRequestDTO
  ): Promise<QuestionResponseDto> {
    const { content, answers } = questionData;
    const params: Prisma.QuestionCreateInput = {
      form: {
        connect: {
          id: formId
        }
      },
      content
    };
    const hasType = !!answers?.type;
    if (hasType) {
      params.type = answers.type;
      params.answers = {
        create: answers.data
      };
    }
    try {
      const question = await this.questionService.create(params);
      return new QuestionResponseDto(question);
    } catch (error) {
      this.reportLoggerAndThrowException(error, params);
    }
  }

  @Post('/:questionId/questions')
  async createChild(
    @Param('formId') formId: string,
    @Param('questionId') questionId: string,
    @Body() questionData: QuestionRequestDTO
  ): Promise<QuestionResponseDto> {
    const { content, answers } = questionData;
    const params: Prisma.QuestionCreateInput = {
      form: {
        connect: {
          id: formId
        }
      },
      parent: {
        connect: {
          id: questionId
        }
      },
      content,
      type: answers.type,
      answers: {
        create: answers.data
      }
    };
    try {
      const question = await this.questionService.create(params);
      return new QuestionResponseDto(question);
    } catch (error) {
      this.reportLoggerAndThrowException(error, params);
    }
  }

  @Patch('/:id')
  async updateQuestion(
    @Param('id') id: string,
    @Body() questionData: QuestionRequestDTO
  ): Promise<QuestionResponseDto> {
    const { content, answers } = questionData;
    const params: any = {
      where: {
        id
      },
      data: {
        content
      }
    };
    const hasType = !!answers?.type;
    if (hasType) {
      const upsert = answers?.data.map((answer: Answer) => ({
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
      params.data.type = answers.type;
      params.data.answers = {
        upsert
      };
    }
    try {
      const question = await this.questionService.update(params);
      return new QuestionResponseDto(question);
    } catch (error) {
      this.reportLoggerAndThrowException(error, params);
    }
  }

  @Delete('/:id')
  async deleteQuestion(@Param('id') id: string): Promise<QuestionModel> {
    try {
      return await this.questionService.delete({ id });
    } catch (error) {
      this.reportLoggerAndThrowException(error, { id });
    }
  }
}
