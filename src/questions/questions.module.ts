import { Module } from '@nestjs/common';
import { AppLogger } from '~/app.logger';
import { PrismaService } from '~/common/service';
import { QuestionsController } from '~/questions/questions.controller';
import { QuestionsService } from '~/questions/questions.service';

@Module({
  providers: [QuestionsService, PrismaService, AppLogger],
  controllers: [QuestionsController]
})
export class QuestionsModule {}
