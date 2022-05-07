import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { FormsService } from '~/forms/forms.service';
import { SurveysController } from '~/surveys/surveys.controller';
import { SurveysService } from '~/surveys/surveys.service';

describe('SurveysController', () => {
  let controller: SurveysController;
  let service: SurveysService;
  let formService: FormsService;

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
        FormsService,
        SurveysService,
        PrismaService
      ],
      controllers: [SurveysController]
    }).compile();
    controller = module.get<SurveysController>(SurveysController);
    service = module.get<SurveysService>(SurveysService);
    formService = module.get<FormsService>(FormsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty list', async () => {
    jest.spyOn(formService, 'getForm').mockImplementationOnce(async () => [] as any);
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 0,
      surveys: []
    }));
    const response = await controller.getAll('id', {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(0);
  });

  it('should return not empty list', async () => {
    jest.spyOn(formService, 'getForm').mockImplementationOnce(async () => [] as any);
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      surveys: [{}] as any
    }));
    const response = await controller.getAll('id', {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should return not empty list filter by email', async () => {
    jest.spyOn(formService, 'getForm').mockImplementationOnce(async () => [] as any);
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      surveys: [{}] as any
    }));
    const response = await controller.getAll('id', {
      name: faker.random.word()
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
    jest.spyOn(service, 'getSurvey').mockImplementationOnce(async () => ({} as any));
    const response = await controller.getSurvey(faker.datatype.uuid());
    expect(response).toEqual({});
  });

  it('should create and throw error', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.createSurvey('id', {} as any);
    await expect(promise).rejects.toThrowError();
  });

  it('should create new record', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => ({} as any));
    const response = await controller.createSurvey('id', {} as any);
    expect(response).toEqual({});
  });

  it('should update record', async () => {
    jest.spyOn(service, 'update').mockImplementationOnce(async () => ({} as any));
    const response = await controller.updateSurvey('id', faker.datatype.uuid(), {} as any);
    expect(response).toEqual({});
  });

  it('should delete record', async () => {
    jest.spyOn(service, 'delete').mockImplementationOnce(async () => ({} as any));
    const response = await controller.deleteSurvey(faker.datatype.uuid());
    expect(response).toEqual({});
  });
});
