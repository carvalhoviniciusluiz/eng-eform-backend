import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { UsersService } from '~/users/users.service';

describe('UsersService', () => {
  let service: UsersService;
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
        UsersService,
        PrismaService
      ]
    }).compile();
    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a record', async () => {
    prisma.user.findUnique = jest.fn().mockReturnValueOnce({});
    const response = await service.getUser({
      id: faker.datatype.uuid()
    });
    expect(response).toEqual({});
  });

  it('should return empty list', async () => {
    prisma.user.count = jest.fn().mockReturnValueOnce(0);
    prisma.user.findMany = jest.fn().mockReturnValueOnce([]);
    const response = await service.getAll({});
    expect(response.count).toBe(0);
    expect(response.users.length).toBe(0);
  });

  it('should return not empty list', async () => {
    prisma.user.count = jest.fn().mockReturnValueOnce(1);
    prisma.user.findMany = jest.fn().mockReturnValueOnce([{}]);
    const response = await service.getAll({});
    expect(response.count).toBe(1);
    expect(response.users.length).toBe(1);
  });

  it('should create a new record', async () => {
    prisma.user.create = jest.fn().mockReturnValueOnce({});
    const response = await service.create({
      email: faker.internet.email()
    });
    expect(response).not.toBeUndefined();
  });

  it('should update a record', async () => {
    prisma.user.update = jest.fn().mockReturnValueOnce({});
    const response = await service.update({
      where: {
        id: faker.datatype.uuid()
      },
      data: {
        email: faker.internet.email()
      }
    });
    expect(response).not.toBeUndefined();
  });

  it('should delete a record', async () => {
    prisma.user.delete = jest.fn().mockReturnValueOnce(null);
    const response = await service.delete({
      id: faker.datatype.uuid()
    });
    expect(response).toBeNull();
  });
});
