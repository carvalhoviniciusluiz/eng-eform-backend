import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { RootService } from '~/root/root.service';

// const formMock = {
//   name: faker.random.word(),
//   author: {},
//   authorDraft: JSON.stringify({}),
//   company: {}
// };

describe('RootService', () => {
  let service: RootService;
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
        RootService,
        PrismaService
      ]
    }).compile();
    service = module.get<RootService>(RootService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a record', async () => {
    prisma.form.findUnique = jest.fn().mockReturnValueOnce({});
    const response = await service.getForm({
      id: faker.datatype.uuid()
    });
    expect(response).toEqual({});
  });

  it('should return empty list', async () => {
    prisma.form.count = jest.fn().mockReturnValueOnce(0);
    prisma.form.findMany = jest.fn().mockReturnValueOnce([]);
    const response = await service.getAll({});
    expect(response.count).toBe(0);
    expect(response.forms.length).toBe(0);
  });

  it('should return not empty list', async () => {
    prisma.form.count = jest.fn().mockReturnValueOnce(1);
    prisma.form.findMany = jest.fn().mockReturnValueOnce([{}]);
    const response = await service.getAll({});
    expect(response.count).toBe(1);
    expect(response.forms.length).toBe(1);
  });
});
