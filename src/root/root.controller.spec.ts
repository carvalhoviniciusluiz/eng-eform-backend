import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { RootController } from '~/root/root.controller';
import { RootService } from '~/root/root.service';

describe('RootController', () => {
  let controller: RootController;
  let service: RootService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
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
        {
          provide: PrismaService,
          useValue: jest.fn()
        },
        RootService
      ],
      controllers: [RootController]
    }).compile();

    controller = app.get<RootController>(RootController);
    service = app.get<RootService>(RootService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 0,
      forms: []
    }));
    const response = await controller.getAll({});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(0);
  });

  it('should return not empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      forms: [{}] as any
    }));
    const response = await controller.getAll({});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should return not empty list filter by email', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      forms: [{}] as any
    }));
    const response = await controller.getAll({
      name: faker.random.word()
    });
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should throw badrequest', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.getAll({});
    await expect(promise).rejects.toThrowError();
  });

  it('should throw error', async () => {
    jest.spyOn(service, 'getForm').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.getForm(faker.datatype.uuid());
    await expect(promise).rejects.toThrowError();
  });

  it('should return one form', async () => {
    jest.spyOn(service, 'getForm').mockImplementationOnce(
      async () =>
        ({
          questions: []
        } as any)
    );
    const response = await controller.getForm(faker.datatype.uuid());
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

  it('should return one form with questions', async () => {
    jest.spyOn(service, 'getForm').mockImplementationOnce(
      async () =>
        ({
          questions: [{}]
        } as any)
    );
    const response = await controller.getForm(faker.datatype.uuid());
    expect(response.questions).not.toBeUndefined();
  });

  it('should return one form with questions and children', async () => {
    jest.spyOn(service, 'getForm').mockImplementationOnce(
      async () =>
        ({
          questions: [
            {
              children: [{}]
            }
          ]
        } as any)
    );
    const response = await controller.getForm(faker.datatype.uuid());
    expect(response.questions).not.toBeUndefined();
  });

  it('should return one form with questions and children', async () => {
    jest.spyOn(service, 'getForm').mockImplementationOnce(
      async () =>
        ({
          questions: [
            {
              children: [{}]
            }
          ]
        } as any)
    );
    const response = await controller.getForm(faker.datatype.uuid());
    expect(response.questions).not.toBeUndefined();
  });

  it('should return one form with questions and children and answers', async () => {
    jest.spyOn(service, 'getForm').mockImplementationOnce(
      async () =>
        ({
          questions: [
            {
              children: [
                {
                  answers: [{}]
                }
              ]
            }
          ]
        } as any)
    );
    const response = await controller.getForm(faker.datatype.uuid());
    expect(response.questions).not.toBeUndefined();
  });
});
