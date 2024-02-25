import { Module } from '@nestjs/common';
import { PrismaService } from '~/common/service';
import { PeopleController } from '~/people/people.controller';
import { PeopleService } from '~/people/people.service';

@Module({
  providers: [PeopleService, PrismaService],
  controllers: [PeopleController]
})
export class PeopleModule {}
