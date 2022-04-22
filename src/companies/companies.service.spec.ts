import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { PrismaService } from '~/common/service';
import { CompaniesService } from '~/companies/companies.service';
import { CacheService } from '~/config';

describe('CompaniesService', () => {
  let service: CompaniesService;
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
        CompaniesService,
        PrismaService
      ]
    }).compile();
    service = module.get<CompaniesService>(CompaniesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a record', async () => {
    prisma.company.findUnique = jest.fn().mockReturnValueOnce({});
    const response = await service.getCompany({
      id: faker.datatype.uuid()
    });
    expect(response).toEqual({});
  });

  it('should return empty list', async () => {
    prisma.company.count = jest.fn().mockReturnValueOnce(0);
    prisma.company.findMany = jest.fn().mockReturnValueOnce([]);
    const response = await service.getAll({});
    expect(response.count).toBe(0);
    expect(response.companies.length).toBe(0);
  });

  it('should return not empty list', async () => {
    prisma.company.count = jest.fn().mockReturnValueOnce(1);
    prisma.company.findMany = jest.fn().mockReturnValueOnce([{}]);
    const response = await service.getAll({});
    expect(response.count).toBe(1);
    expect(response.companies.length).toBe(1);
  });

  it('should create a new record', async () => {
    prisma.company.create = jest.fn().mockReturnValueOnce({});
    const response = await service.create({
      initials: faker.random.word()
    });
    expect(response).not.toBeUndefined();
  });

  it('should update a record', async () => {
    prisma.company.update = jest.fn().mockReturnValueOnce({});
    const response = await service.update({
      where: {
        id: faker.datatype.uuid()
      },
      data: {
        initials: faker.random.word()
      }
    });
    expect(response).not.toBeUndefined();
  });

  it('should delete a record', async () => {
    prisma.company.delete = jest.fn().mockReturnValueOnce(null);
    const response = await service.delete({
      id: faker.datatype.uuid()
    });
    expect(response).toBeNull();
  });
});
