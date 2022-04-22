import { Module } from '@nestjs/common';
import { PrismaService } from '~/common/service';
import { CompaniesController } from '~/companies/companies.controller';
import { CompaniesService } from '~/companies/companies.service';

@Module({
  providers: [CompaniesService, PrismaService],
  controllers: [CompaniesController]
})
export class CompaniesModule {}
