import { Injectable } from '@nestjs/common';
import { Answer as AnswerModel, Prisma } from '@prisma/client';
import { PrismaService } from '~/common/service';

@Injectable()
export class AnswersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAnswer(answerWhereUniqueInput: Prisma.AnswerWhereUniqueInput): Promise<AnswerModel | null> {
    return this.prisma.answer.findUnique({
      where: answerWhereUniqueInput
    });
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByWithRelationInput;
  }): Promise<{ count: number; answers: AnswerModel[] }> {
    const { skip, take, where, orderBy } = params;
    const count = await this.prisma.answer.count();
    const answers = await this.prisma.answer.findMany({
      skip,
      take,
      where,
      orderBy
    });

    return {
      count,
      answers
    };
  }

  async create(data: Prisma.AnswerCreateInput): Promise<AnswerModel> {
    return this.prisma.answer.create({
      data
    });
  }

  async update(params: { where: Prisma.AnswerWhereUniqueInput; data: Prisma.AnswerUpdateInput }): Promise<AnswerModel> {
    const { where, data } = params;
    return this.prisma.answer.update({
      data,
      where
    });
  }

  async delete(where: Prisma.AnswerWhereUniqueInput): Promise<AnswerModel> {
    return this.prisma.answer.delete({
      where
    });
  }
}
