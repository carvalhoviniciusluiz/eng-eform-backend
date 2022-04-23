import { Module } from '@nestjs/common';
import { PrismaService } from '~/common/service';
import { QuestionsController } from '~/questions/questions.controller';
import { QuestionsService } from '~/questions/questions.service';

@Module({
  providers: [QuestionsService, PrismaService],
  controllers: [QuestionsController]
})
export class QuestionsModule {}
