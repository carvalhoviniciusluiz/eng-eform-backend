import { Injectable } from '@nestjs/common';
import { Prisma, Survey as SurveyModel } from '@prisma/client';
import { PrismaService } from '~/common/service';
import { SurveyDataResponse } from '~/surveys/types';

@Injectable()
export class SurveysService {
  constructor(private readonly prisma: PrismaService) {}

  async getSurvey(surveyWhereUniqueInput: Prisma.SurveyWhereUniqueInput): Promise<SurveyModel | null> {
    return this.prisma.survey.findUnique({
      where: surveyWhereUniqueInput
    });
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.SurveyWhereInput;
    orderBy?: Prisma.SurveyOrderByWithRelationInput;
  }): Promise<{ count: number; surveys: SurveyDataResponse[] }> {
    const { skip, take, where, orderBy } = params;
    const count = await this.prisma.survey.count();
    const surveys = await this.prisma.survey.findMany({
      skip,
      take,
      where,
      orderBy,
      select: {
        id: true,
        name: true,
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
            name: true,
            updatedAt: true
          }
        }
      }
    });
    return {
      count,
      surveys
    };
  }

  async create(data: Prisma.SurveyCreateInput): Promise<SurveyModel> {
    return this.prisma.survey.create({
      data
    });
  }

  async update(params: { where: Prisma.SurveyWhereUniqueInput; data: Prisma.SurveyUpdateInput }): Promise<SurveyModel> {
    const { where, data } = params;
    return this.prisma.survey.update({
      data,
      where
    });
  }

  async delete(where: Prisma.SurveyWhereUniqueInput): Promise<SurveyModel> {
    return this.prisma.survey.delete({
      where
    });
  }
}
