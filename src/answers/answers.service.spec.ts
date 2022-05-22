import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { AnswersService } from '~/answers/answers.service';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';

describe('AnswersService', () => {
  let service: AnswersService;
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
        AnswersService,
        PrismaService
      ]
    }).compile();
    service = module.get<AnswersService>(AnswersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a record', async () => {
    prisma.answer.findUnique = jest.fn().mockReturnValueOnce({});
    const response = await service.getAnswer({
      id: faker.datatype.uuid()
    });
    expect(response).toEqual({});
  });

  it('should return empty list', async () => {
    prisma.answer.count = jest.fn().mockReturnValueOnce(0);
    prisma.answer.findMany = jest.fn().mockReturnValueOnce([]);
    const response = await service.getAll({});
    expect(response.count).toBe(0);
    expect(response.answers.length).toBe(0);
  });

  it('should return not empty list', async () => {
    prisma.answer.count = jest.fn().mockReturnValueOnce(1);
    prisma.answer.findMany = jest.fn().mockReturnValueOnce([{}]);
    const response = await service.getAll({});
    expect(response.count).toBe(1);
    expect(response.answers.length).toBe(1);
  });

  it('should create a new record', async () => {
    prisma.answer.create = jest.fn().mockReturnValueOnce({});
    const response = await service.create({
      content: 'xxxx'
    } as any);
    expect(response).not.toBeUndefined();
  });

  it('should update a record', async () => {
    prisma.answer.update = jest.fn().mockReturnValueOnce({});
    const response = await service.update({
      where: {
        id: faker.datatype.uuid()
      },
      data: {
        content: 'xxxx'
      }
    });
    expect(response).not.toBeUndefined();
  });

  it('should delete a record', async () => {
    prisma.answer.delete = jest.fn().mockReturnValueOnce(null);
    const response = await service.delete({
      id: faker.datatype.uuid()
    });
    expect(response).toBeNull();
  });
});
