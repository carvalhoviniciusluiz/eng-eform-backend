import { Injectable } from '@nestjs/common';
import { Prisma, Question as QuestionModel } from '@prisma/client';
import { PrismaService } from '~/common/service';
import { QuestionDataResponse } from '~/questions/types';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  async getQuestion(questionWhereUniqueInput: Prisma.QuestionWhereUniqueInput): Promise<QuestionModel | null> {
    return this.prisma.question.findUnique({
      where: questionWhereUniqueInput,
      include: {
        answers: {
          where: {
            deleted: null
          }
        },
        children: {
          include: {
            answers: false
          }
        }
      }
    });
  }

  async getAll(params: Prisma.QuestionFindManyArgs): Promise<{ count: number; questions: QuestionDataResponse[] }> {
    const { skip, take, where, orderBy } = params;
    const count = await this.prisma.question.count();
    const questions = await this.prisma.question.findMany({
      skip,
      take,
      where,
      orderBy,
      select: {
        id: true,
        content: true,
        updatedAt: true,
        form: {
          select: {
            id: true,
            name: true,
            updatedAt: true
          }
        },
        parent: {
          select: {
            id: true,
            content: true,
            updatedAt: true
          }
        }
      }
    });

    return {
      count,
      questions
    };
  }

  async create(data: Prisma.QuestionCreateInput): Promise<QuestionModel> {
    return this.prisma.question.create({
      data,
      include: {
        answers: {
          where: {
            deleted: null
          }
        }
      }
    });
  }

  async update(params: {
    where: Prisma.QuestionWhereUniqueInput;
    data: Prisma.QuestionUpdateInput;
  }): Promise<QuestionModel> {
    const { where, data } = params;
    return this.prisma.question.update({
      where,
      data,
      include: {
        answers: {
          where: {
            deleted: null
          }
        }
      }
    });
  }

  async delete(where: Prisma.QuestionWhereUniqueInput): Promise<QuestionModel> {
    return this.prisma.question.delete({
      where
    });
  }
}
