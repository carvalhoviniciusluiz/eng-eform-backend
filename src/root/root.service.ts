import { Injectable } from '@nestjs/common';
import { Form as FormModel, Prisma, Question as QuestionModel } from '@prisma/client';
import { PrismaService } from '~/common/service';

type FormResponse = FormModel & {
  questions: QuestionModel[];
};

@Injectable()
export class RootService {
  constructor(private readonly prisma: PrismaService) {}

  async getForm(formWhereUniqueInput: Prisma.FormWhereUniqueInput): Promise<FormResponse | null> {
    return this.prisma.form.findUnique({
      where: formWhereUniqueInput,
      include: {
        questions: {
          where: {
            parentId: null,
            deleted: null
          },
          orderBy: { createdAt: 'asc' },
          include: {
            answers: true,
            children: {
              where: {
                deleted: null
              },
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

  private isObject(obj: any) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
  }

  createQuestionAnswerList(formId: string, data: { [key: string]: string | string[] }[]) {
    const questions = Object.keys(data);
    return questions.reduce((acc, questionId) => {
      const answerData = data[questionId as any];
      const isObject = this.isObject(answerData);
      const isArray = Array.isArray(answerData);
      if (isObject) {
        acc.push({
          formId,
          questionId,
          response: answerData.response
        });
      } else if (isArray) {
        for (const value of answerData) {
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
          answerId: answerData
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
