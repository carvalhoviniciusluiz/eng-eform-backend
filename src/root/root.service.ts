import { Injectable } from '@nestjs/common';
import { Form as FormModel, Prisma } from '@prisma/client';
import { PrismaService } from '~/common/service';

@Injectable()
export class RootService {
  constructor(private readonly prisma: PrismaService) {}

  async getForm(formWhereUniqueInput: Prisma.FormWhereUniqueInput): Promise<FormModel | null> {
    return this.prisma.form.findUnique({
      where: formWhereUniqueInput,
      include: {
        questions: {
          where: {
            parentId: null
          },
          include: {
            answers: true,
            children: {
              include: {
                answers: true
              }
            }
          }
        }
      }
    });
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.FormWhereInput;
    orderBy?: Prisma.FormOrderByWithRelationInput;
  }): Promise<{ count: number; forms: FormModel[] }> {
    const { skip, take, where, orderBy } = params;
    const count = await this.prisma.form.count();
    const forms = await this.prisma.form.findMany({
      skip,
      take,
      where,
      orderBy
    });

    return {
      count,
      forms
    };
  }

  createQuestionAnswerList(formId: string, data: { [key: string]: string | string[] }[]) {
    const questions = Object.keys(data);
    return questions.reduce((acc, questionId) => {
      const answerIdOrArray = data[questionId as any];
      const isArray = Array.isArray(answerIdOrArray);

      if (isArray) {
        for (const value of answerIdOrArray) {
          acc.push({
            formId,
            questionId,
            answerId: value
          });
        }
      } else {
        acc.push({
          formId,
          questionId,
          answerId: answerIdOrArray
        });
      }

      return acc;
    }, []);
  }

  async saveQuestionAnswers({ formId, data }: { formId: string; data: { [key: string]: string | string[] }[] }) {
    const newData = this.createQuestionAnswerList(formId, data);

    await this.prisma.questionAnswer.createMany({
      data: newData
    });
  }

  async create(data: Prisma.FormCreateInput): Promise<FormModel> {
    return this.prisma.form.create({
      data
    });
  }
}
