import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { AppLogger } from '~/app.logger';
import { CacheService } from '~/config';
import { UsersController } from '~/users/users.controller';
import { UsersService } from '~/users/users.service';

const userMock = {
  email: faker.internet.email()
} as any;

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

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
        {
          provide: AppLogger,
          useValue: {
            setContext: jest.fn(),
            fail: jest.fn()
          }
        },
        {
          provide: UsersService,
          useValue: {
            getAll: jest.fn(),
            getUser: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
          }
        }
      ],
      controllers: [UsersController]
    }).compile();
    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return empty list', async () => {
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
        count: 0,
        users: []
      }));
      const response = await controller.getAll(userMock, {});
      expect(response.meta).toBeDefined();
      expect(response.data.length).toBe(0);
    });

    it('should return not empty list', async () => {
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
        count: 1,
        users: [{}] as any
      }));
      const response = await controller.getAll(userMock, {});
      expect(response.meta).toBeDefined();
      expect(response.data.length).toBe(1);
    });

    it('should return not empty list filter by email', async () => {
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
        count: 1,
        users: [{}] as any
      }));
      const response = await controller.getAll(userMock, {});
      expect(response.meta).toBeDefined();
      expect(response.data.length).toBe(1);
    });

    it('should throw badrequest', async () => {
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => {
        throw new Error();
      });
      const promise = controller.getAll(userMock, {});
      await expect(promise).rejects.toThrowError();
    });
  });

  describe('getUser', () => {
    it('should return one record', async () => {
      jest.spyOn(service, 'getUser').mockImplementationOnce(
        async () =>
          ({
            company: {} as any
          } as any)
      );
      const response = await controller.getUser(faker.datatype.uuid());
      expect(response).toEqual({
        data: {
          company: {
            id: undefined,
            initials: undefined,
            name: undefined,
            updatedAt: undefined
          },
          email: undefined,
          id: undefined,
          role: undefined,
          updatedAt: undefined
        }
      });
    });
  });

  describe('create', () => {
    it('should create new record', async () => {
      jest.spyOn(service, 'create').mockImplementationOnce(async () => ({} as any));
      const response = await controller.createUser(userMock);
      expect(response).toEqual({});
    });
  });

  describe('update', () => {
    it('should update record', async () => {
      jest.spyOn(service, 'update').mockImplementationOnce(async () => ({} as any));
      const response = await controller.updateUser(faker.datatype.uuid(), userMock);
      expect(response).toEqual({});
    });
  });

  describe('delete', () => {
    it('should delete record', async () => {
      jest.spyOn(service, 'delete').mockImplementationOnce(async () => ({} as any));
      const response = await controller.deleteUser(faker.datatype.uuid());
      expect(response).toEqual({});
    });
  });
});
