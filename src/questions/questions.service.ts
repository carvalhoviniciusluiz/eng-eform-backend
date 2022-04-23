import { Injectable } from '@nestjs/common';
import { Prisma, Question as QuestionModel } from '@prisma/client';
import { PrismaService } from '~/common/service';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  async getQuestion(questionWhereUniqueInput: Prisma.QuestionWhereUniqueInput): Promise<QuestionModel | null> {
    return this.prisma.question.findUnique({
      where: questionWhereUniqueInput
    });
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithRelationInput;
  }): Promise<{ count: number; questions: QuestionModel[] }> {
    const { skip, take, where, orderBy } = params;
    const count = await this.prisma.question.count();
    const questions = await this.prisma.question.findMany({
      skip,
      take,
      where,
      orderBy
    });

    return {
      count,
      questions
    };
  }

  async create(data: Prisma.QuestionCreateInput): Promise<QuestionModel> {
    return this.prisma.question.create({
      data
    });
  }

  async update(params: {
    where: Prisma.QuestionWhereUniqueInput;
    data: Prisma.QuestionUpdateInput;
  }): Promise<QuestionModel> {
    const { where, data } = params;
    return this.prisma.question.update({
      data,
      where
    });
  }

  async delete(where: Prisma.QuestionWhereUniqueInput): Promise<QuestionModel> {
    return this.prisma.question.delete({
      where
    });
  }
}
