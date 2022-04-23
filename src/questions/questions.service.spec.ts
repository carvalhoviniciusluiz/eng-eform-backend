import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { QuestionsService } from '~/questions/questions.service';

const QuestionMock = {
  survey: {}
};

describe('QuestionsService', () => {
  let service: QuestionsService;
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
        QuestionsService,
        PrismaService
      ]
    }).compile();
    service = module.get<QuestionsService>(QuestionsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a record', async () => {
    prisma.question.findUnique = jest.fn().mockReturnValueOnce({});
    const response = await service.getQuestion({
      id: faker.datatype.uuid()
    });
    expect(response).toEqual({});
  });

  it('should return empty list', async () => {
    prisma.question.count = jest.fn().mockReturnValueOnce(0);
    prisma.question.findMany = jest.fn().mockReturnValueOnce([]);
    const response = await service.getAll({});
    expect(response.count).toBe(0);
    expect(response.questions.length).toBe(0);
  });

  it('should return not empty list', async () => {
    prisma.question.count = jest.fn().mockReturnValueOnce(1);
    prisma.question.findMany = jest.fn().mockReturnValueOnce([{}]);
    const response = await service.getAll({});
    expect(response.count).toBe(1);
    expect(response.questions.length).toBe(1);
  });

  it('should create a new record', async () => {
    prisma.question.create = jest.fn().mockReturnValueOnce({});
    const response = await service.create(QuestionMock);
    expect(response).not.toBeUndefined();
  });

  it('should update a record', async () => {
    prisma.question.update = jest.fn().mockReturnValueOnce({});
    const response = await service.update({
      where: {
        id: faker.datatype.uuid()
      },
      data: QuestionMock
    });
    expect(response).not.toBeUndefined();
  });

  it('should delete a record', async () => {
    prisma.question.delete = jest.fn().mockReturnValueOnce(null);
    const response = await service.delete({
      id: faker.datatype.uuid()
    });
    expect(response).toBeNull();
  });
});
