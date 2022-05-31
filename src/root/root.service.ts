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
        surveys: {
          include: {
            questions: {
              include: {
                answers: true
              }
            },
            children: {
              include: {
                questions: {
                  include: {
                    answers: true
                  }
                },
                children: {
                  include: {
                    questions: {
                      include: {
                        answers: true
                      }
                    },
                    children: {
                      include: {
                        questions: {
                          include: {
                            answers: true
                          }
                        },
                        children: true
                      }
                    }
                  }
                }
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
}
