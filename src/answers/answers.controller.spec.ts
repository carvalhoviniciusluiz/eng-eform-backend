import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { AnswersController } from '~/answers/answers.controller';
import { AnswersService } from '~/answers/answers.service';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';

describe('AnswersController', () => {
  let controller: AnswersController;
  let service: AnswersService;

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
      ],
      controllers: [AnswersController]
    }).compile();
    controller = module.get<AnswersController>(AnswersController);
    service = module.get<AnswersService>(AnswersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 0,
      answers: []
    }));
    const response = await controller.getAll('id', {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(0);
  });

  it('should return not empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      answers: [{}] as any
    }));
    const response = await controller.getAll('id', {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should return not empty list filter by email', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      answers: [{}] as any
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
    jest.spyOn(service, 'getAnswer').mockImplementationOnce(async () => ({} as any));
    const response = await controller.getAnswer(faker.datatype.uuid());
    expect(response).toEqual({});
  });

  it('should create and throw error', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.createAnswer('id', {} as any);
    await expect(promise).rejects.toThrowError();
  });

  it('should create new record', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => ({} as any));
    const response = await controller.createAnswer('id', {} as any);
    expect(response).toEqual({});
  });

  it('should update record', async () => {
    jest.spyOn(service, 'update').mockImplementationOnce(async () => ({} as any));
    const response = await controller.updateAnswer('id', faker.datatype.uuid(), {} as any);
    expect(response).toEqual({});
  });

  it('should delete record', async () => {
    jest.spyOn(service, 'delete').mockImplementationOnce(async () => ({} as any));
    const response = await controller.deleteAnswer(faker.datatype.uuid());
    expect(response).toEqual({});
  });
});
