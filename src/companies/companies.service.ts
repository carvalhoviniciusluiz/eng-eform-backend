import { Injectable } from '@nestjs/common';
import { Company as CompanyModel, Prisma } from '@prisma/client';
import { PrismaService } from '~/common/service';

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  async getCompany(companyWhereUniqueInput: Prisma.CompanyWhereUniqueInput): Promise<CompanyModel | null> {
    return this.prisma.company.findUnique({
      where: companyWhereUniqueInput
    });
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithRelationInput;
  }): Promise<{ count: number; companies: CompanyModel[] }> {
    const { skip, take, where, orderBy } = params;
    const count = await this.prisma.company.count();
    const companies = await this.prisma.company.findMany({
      skip,
      take,
      where,
      orderBy
    });

    return {
      count,
      companies
    };
  }

  async create(data: Prisma.CompanyCreateInput): Promise<CompanyModel> {
    return this.prisma.company.create({
      data
    });
  }

  async update(params: {
    where: Prisma.CompanyWhereUniqueInput;
    data: Prisma.CompanyUpdateInput;
  }): Promise<CompanyModel> {
    const { where, data } = params;
    return this.prisma.company.update({
      data,
      where
    });
  }

  async delete(where: Prisma.CompanyWhereUniqueInput): Promise<CompanyModel> {
    return this.prisma.company.delete({
      where
    });
  }
}
