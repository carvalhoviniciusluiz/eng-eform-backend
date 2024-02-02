import { Injectable } from '@nestjs/common';
import { Form as FormModel, Prisma, Question as QuestionModel } from '@prisma/client';
import { PrismaService } from '~/common/service';

type FormResponse = FormModel & {
  questions: QuestionModel[];
};

@Injectable()
export class FormsService {
  constructor(private readonly prisma: PrismaService) {}

  async getStats(formId: string) {
    const questionResults = await this.prisma.$queryRawUnsafe(
      `
SELECT Questions.id, Questions.content as question, COUNT(Question_Answers.id)::INT as count, Answers.content as answer, date_trunc('day', Question_Answers.updated_at) as date
FROM Forms
LEFT JOIN Questions ON Questions.form_id = Forms.id
LEFT JOIN Answers ON Questions.id = Answers.question_id
LEFT JOIN Question_Answers ON Question_Answers.question_id = Questions.id and Question_Answers.answer_id = Answers.id
WHERE Forms.id = $1
GROUP BY Questions.id, Answers.content, date_trunc('day', Question_Answers.updated_at)
ORDER BY Questions.content ASC, Answers.content ASC;`,
      formId
    );
    return {
      data: questionResults
    };
  }

  async getForm(
    formWhereUniqueInput: Prisma.FormWhereUniqueInput,
    questionsShow: boolean
  ): Promise<FormResponse | null> {
    const options: Prisma.FormFindUniqueArgs = {
      where: formWhereUniqueInput
    };
    const questionsShowForce = questionsShow === undefined;
    if (questionsShow || questionsShowForce) {
      options.include = {
        questions: {
          where: {
            parentId: null,
            deleted: null
          },
          orderBy: { createdAt: 'asc' }
        }
      };
    }
    return this.prisma.form.findUnique(options) as any;
  }

  async getAll(params: {
    companyId: string;
    skip?: number;
    take?: number;
    orderBy?: Prisma.FormOrderByWithRelationInput;
  }): Promise<{ count: number; forms: FormModel[] }> {
    const { skip, take, companyId, orderBy } = params;
    const count = await this.prisma.form.count();
    const forms = await this.prisma.form.findMany({
      skip,
      take,
      orderBy,
      where: {
        companies: {
          some: {
            companyId
          }
        }
      }
    });
    return {
      count,
      forms
    };
  }

  async create(data: Prisma.FormCreateInput): Promise<FormModel> {
    return this.prisma.form.create({
      data
    });
  }

  async update(params: { where: Prisma.FormWhereUniqueInput; data: Prisma.FormUpdateInput }): Promise<FormModel> {
    const { where, data } = params;
    return this.prisma.form.update({
      data,
      where
    });
  }

  async delete(where: Prisma.FormWhereUniqueInput): Promise<FormModel> {
    return this.prisma.form.delete({
      where
    });
  }
}
