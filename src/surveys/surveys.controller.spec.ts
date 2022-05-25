import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { SurveysController } from '~/surveys/surveys.controller';
import { SurveysService } from '~/surveys/surveys.service';

describe('SurveysController', () => {
  let controller: SurveysController;
  let service: SurveysService;

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
      ],
      controllers: [SurveysController]
    }).compile();
    controller = module.get<SurveysController>(SurveysController);
    service = module.get<SurveysService>(SurveysService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 0,
      surveys: []
    }));
    const response = await controller.getAll(faker.datatype.uuid(), {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(0);
  });

  it('should return not empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      surveys: [{}] as any
    }));
    const response = await controller.getAll(faker.datatype.uuid(), {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should return not empty list filter by email', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      surveys: [{}] as any
    }));
    const response = await controller.getAll(faker.datatype.uuid(), {
      name: faker.random.word()
    });
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should throw badrequest', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.getAll(faker.datatype.uuid(), {});
    await expect(promise).rejects.toThrowError();
  });

  it('should return empty child list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 0,
      surveys: []
    }));
    const response = await controller.getChildAll(faker.datatype.uuid(), faker.datatype.uuid(), {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(0);
  });

  it('should return not empty child list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      surveys: [{}] as any
    }));
    const response = await controller.getChildAll(faker.datatype.uuid(), faker.datatype.uuid(), {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should return not empty child list filter by email', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      surveys: [{}] as any
    }));
    const response = await controller.getChildAll(faker.datatype.uuid(), faker.datatype.uuid(), {
      name: faker.random.word()
    });
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should throw badrequest to child all list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.getChildAll(faker.datatype.uuid(), faker.datatype.uuid(), {});
    await expect(promise).rejects.toThrowError();
  });

  it('should return one record', async () => {
    jest.spyOn(service, 'getSurvey').mockImplementationOnce(async () => ({} as any));
    const response = await controller.getSurvey(faker.datatype.uuid());
    expect(response).toEqual({});
  });

  it('should create and throw error', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.createSurvey(faker.datatype.uuid(), {} as any);
    await expect(promise).rejects.toThrowError();
  });

  it('should create new record', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => ({} as any));
    const response = await controller.createSurvey(faker.datatype.uuid(), {} as any);
    expect(response).toEqual({});
  });

  it('should call create to new child and throw error', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.createSurveyChild(faker.datatype.uuid(), faker.datatype.uuid(), {} as any);
    await expect(promise).rejects.toThrowError();
  });

  it('should create new child record', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => ({} as any));
    const response = await controller.createSurveyChild(faker.datatype.uuid(), faker.datatype.uuid(), {} as any);
    expect(response).toEqual({});
  });

  it('should update record', async () => {
    jest.spyOn(service, 'update').mockImplementationOnce(async () => ({} as any));
    const response = await controller.updateSurvey(faker.datatype.uuid(), faker.datatype.uuid(), {} as any);
    expect(response).toBeUndefined();
  });

  it('should throw badrequest', async () => {
    jest.spyOn(service, 'update').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.updateSurvey(faker.datatype.uuid(), faker.datatype.uuid(), {} as any);
    await expect(promise).rejects.toThrowError();
  });

  it('should delete record', async () => {
    jest.spyOn(service, 'delete').mockImplementationOnce(async () => ({} as any));
    const response = await controller.deleteSurvey(faker.datatype.uuid());
    expect(response).toEqual({});
  });
});
