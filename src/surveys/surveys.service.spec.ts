import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { SurveysService } from '~/surveys/surveys.service';

const SurveyMock = {
  form: {}
};

describe('SurveysService', () => {
  let service: SurveysService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CacheModule.registerAsync({
          useClass: CacheService
        })
      ],
      providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: CacheInterceptor
        },
        SurveysService,
        PrismaService
      ]
    }).compile();
    service = module.get<SurveysService>(SurveysService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a record', async () => {
    prisma.survey.findUnique = jest.fn().mockReturnValueOnce({});
    const response = await service.getSurvey({
      id: faker.datatype.uuid()
    });
    expect(response).toEqual({});
  });

  it('should return empty list', async () => {
    prisma.survey.count = jest.fn().mockReturnValueOnce(0);
    prisma.survey.findMany = jest.fn().mockReturnValueOnce([]);
    const response = await service.getAll({});
    expect(response.count).toBe(0);
    expect(response.surveys.length).toBe(0);
  });

  it('should return not empty list', async () => {
    prisma.survey.count = jest.fn().mockReturnValueOnce(1);
    prisma.survey.findMany = jest.fn().mockReturnValueOnce([{}]);
    const response = await service.getAll({});
    expect(response.count).toBe(1);
    expect(response.surveys.length).toBe(1);
  });

  it('should create a new record', async () => {
    prisma.survey.create = jest.fn().mockReturnValueOnce({});
    const response = await service.create(SurveyMock);
    expect(response).not.toBeUndefined();
  });

  it('should update a record', async () => {
    prisma.survey.update = jest.fn().mockReturnValueOnce({});
    const response = await service.update({
      where: {
        id: faker.datatype.uuid()
      },
      data: SurveyMock
    });
    expect(response).not.toBeUndefined();
  });

  it('should delete a record', async () => {
    prisma.survey.delete = jest.fn().mockReturnValueOnce(null);
    const response = await service.delete({
      id: faker.datatype.uuid()
    });
    expect(response).toBeNull();
  });
});
