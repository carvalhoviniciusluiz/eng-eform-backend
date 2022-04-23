import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { QuestionsController } from '~/questions/questions.controller';
import { QuestionsService } from '~/questions/questions.service';

describe('QuestionsController', () => {
  let controller: QuestionsController;
  let service: QuestionsService;

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
      ],
      controllers: [QuestionsController]
    }).compile();
    controller = module.get<QuestionsController>(QuestionsController);
    service = module.get<QuestionsService>(QuestionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 0,
      questions: []
    }));
    const response = await controller.getAll('id', {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(0);
  });

  it('should return not empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      questions: [{}] as any
    }));
    const response = await controller.getAll('id', {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should return not empty list filter by email', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      questions: [{}] as any
    }));
    const response = await controller.getAll('id', {
      content: faker.random.word()
    });
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should throw badrequest', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.getAll('id', {});
    await expect(promise).rejects.toThrowError();
  });

  it('should return one record', async () => {
    jest.spyOn(service, 'getQuestion').mockImplementationOnce(async () => ({} as any));
    const response = await controller.getQuestion(faker.datatype.uuid());
    expect(response).toEqual({});
  });

  it('should create and throw error', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.createQuestion('id', {} as any);
    await expect(promise).rejects.toThrowError();
  });

  it('should create new record', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => ({} as any));
    const response = await controller.createQuestion('id', {} as any);
    expect(response).toEqual({});
  });

  it('should update record', async () => {
    jest.spyOn(service, 'update').mockImplementationOnce(async () => ({} as any));
    const response = await controller.updateQuestion('id', faker.datatype.uuid(), {} as any);
    expect(response).toEqual({});
  });

  it('should delete record', async () => {
    jest.spyOn(service, 'delete').mockImplementationOnce(async () => ({} as any));
    const response = await controller.deleteQuestion(faker.datatype.uuid());
    expect(response).toEqual({});
  });
});
