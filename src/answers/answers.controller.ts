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
import { Answer as AnswerModel } from '@prisma/client';
import { AnswersService } from '~/answers/answers.service';
import { AnswerPaginateDTO, AnswerPaginateResponseDto, AnswerRequestDTO } from '~/answers/dtos';
import { Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';

@ApiTags('Questions')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('questions/:questionId/answers')
export class AnswersController {
  constructor(private readonly answerService: AnswersService) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(
    @Param('questionId') questionId: string,
    @Query() params: AnswerPaginateDTO
  ): Promise<AnswerPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { content: 'asc' }, content } = params;
    const hasContent = !!content;
    const options = hasContent
      ? {
          where: {
            content: {
              startsWith: content
            },
            questionId
          }
        }
      : {
          where: {
            questionId
          },
          skip,
          take,
          orderBy
        };

    try {
      const { answers, count } = await this.answerService.getAll(options);
      return new AnswerPaginateResponseDto(answers, take, skip, count);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get('/:id')
  async getAnswer(@Param('id') id: string): Promise<AnswerModel> {
    return this.answerService.getAnswer({
      id
    });
  }

  @Post()
  async createAnswer(
    @Param('questionId') questionId: string,
    @Body() answerData: AnswerRequestDTO
  ): Promise<AnswerModel> {
    const { content } = answerData;
    return this.answerService.create({
      content,
      question: {
        connect: {
          id: questionId
        }
      }
    });
  }

  @Patch('/:id')
  async updateAnswer(
    @Param('questionId') questionId: string,
    @Param('id') id: string,
    @Body() answerData: AnswerRequestDTO
  ): Promise<AnswerModel> {
    const { content } = answerData;
    return this.answerService.update({
      where: {
        id
      },
      data: {
        content,
        question: {
          connect: {
            id: questionId
          }
        }
      }
    });
  }

  @Delete('/:id')
  async deleteAnswer(@Param('id') id: string): Promise<AnswerModel> {
    return this.answerService.delete({ id });
  }
}
