import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { FormsController } from '~/forms/forms.controller';
import { FormsService } from '~/forms/forms.service';

const formMock = {
  name: faker.random.word(),
  author: {},
  authorDraft: JSON.stringify({}),
  company: {}
};

describe('FormsController', () => {
  let controller: FormsController;
  let service: FormsService;

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
        PrismaService
      ],
      controllers: [FormsController]
    }).compile();
    controller = module.get<FormsController>(FormsController);
    service = module.get<FormsService>(FormsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 0,
      forms: []
    }));
    const response = await controller.getAll({}, {} as any);
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(0);
  });

  it('should return not empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      forms: [{}] as any
    }));
    const response = await controller.getAll({}, { companyId: '1' } as any);
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should return not empty list filter by email', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      forms: [{}] as any
    }));
    const response = await controller.getAll(
      {
        name: faker.random.word()
      },
      {} as any
    );
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should throw badrequest', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.getAll({}, {} as any);
    await expect(promise).rejects.toThrowError();
  });

  it('should return one record', async () => {
    jest.spyOn(service, 'getForm').mockImplementationOnce(
      async () =>
        ({
          questions: []
        } as any)
    );
    const response = await controller.getForm(faker.datatype.uuid(), { questionsShow: true });
    expect(response).toEqual({
      form: {
        id: undefined,
        name: undefined,
        status: undefined,
        updatedAt: undefined
      },
      questions: []
    });
  });

  it('should create and throw error', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.createForm(formMock, {} as any);
    await expect(promise).rejects.toThrowError();
  });

  it('should create new record', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => ({} as any));
    const response = await controller.createForm(formMock, {} as any);
    expect(response).toEqual({});
  });

  it('should update record', async () => {
    jest.spyOn(service, 'update').mockImplementationOnce(async () => ({} as any));
    const response = await controller.updateForm(faker.datatype.uuid(), formMock, {} as any);
    expect(response).toEqual({});
  });

  it('should delete record', async () => {
    jest.spyOn(service, 'delete').mockImplementationOnce(async () => ({} as any));
    const response = await controller.deleteForm(faker.datatype.uuid());
    expect(response).toEqual({});
  });
});
