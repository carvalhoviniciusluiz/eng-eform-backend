import { Injectable } from '@nestjs/common';
import { Form as FormModel, Prisma } from '@prisma/client';
import { PrismaService } from '~/common/service';

@Injectable()
export class FormsService {
  constructor(private readonly prisma: PrismaService) {}

  async getForm(formWhereUniqueInput: Prisma.FormWhereUniqueInput): Promise<FormModel | null> {
    return this.prisma.form.findUnique({
      where: formWhereUniqueInput
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
