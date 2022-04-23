import { Module } from '@nestjs/common';
import { AnswersController } from '~/answers/answers.controller';
import { AnswersService } from '~/answers/answers.service';
import { PrismaService } from '~/common/service';

@Module({
  providers: [AnswersService, PrismaService],
  controllers: [AnswersController]
})
export class AnswersModule {}
