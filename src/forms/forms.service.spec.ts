import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { FormsService } from '~/forms/forms.service';

const formMock = {
  name: faker.random.word(),
  author: {},
  authorDraft: JSON.stringify({}),
  company: {}
};

describe('FormsService', () => {
  let service: FormsService;
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
        FormsService,
        PrismaService
      ]
    }).compile();
    service = module.get<FormsService>(FormsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a record', async () => {
    prisma.form.findUnique = jest.fn().mockReturnValueOnce({});
    const response = await service.getForm(
      {
        id: faker.datatype.uuid()
      },
      true
    );
    expect(response).toEqual({});
  });

  it('should return empty list', async () => {
    prisma.form.count = jest.fn().mockReturnValueOnce(0);
    prisma.form.findMany = jest.fn().mockReturnValueOnce([]);
    const response = await service.getAll({
      companyId: 'companyId'
    });
    expect(response.count).toBe(0);
    expect(response.forms.length).toBe(0);
  });

  it('should return not empty list', async () => {
    prisma.form.count = jest.fn().mockReturnValueOnce(1);
    prisma.form.findMany = jest.fn().mockReturnValueOnce([{}]);
    const response = await service.getAll({
      companyId: 'companyId'
    });
    expect(response.count).toBe(1);
    expect(response.forms.length).toBe(1);
  });

  it('should create a new record', async () => {
    prisma.form.create = jest.fn().mockReturnValueOnce({});
    const response = await service.create(formMock);
    expect(response).not.toBeUndefined();
  });

  it('should update a record', async () => {
    prisma.form.update = jest.fn().mockReturnValueOnce({});
    const response = await service.update({
      where: {
        id: faker.datatype.uuid()
      },
      data: formMock
    });
    expect(response).not.toBeUndefined();
  });

  it('should delete a record', async () => {
    prisma.form.delete = jest.fn().mockReturnValueOnce(null);
    const response = await service.delete({
      id: faker.datatype.uuid()
    });
    expect(response).toBeNull();
  });
});
