import { Module } from '@nestjs/common';
import { PrismaService } from '~/common/service';
import { FormsService } from '~/forms/forms.service';
import { SurveysController } from '~/surveys/surveys.controller';
import { SurveysService } from '~/surveys/surveys.service';

@Module({
  providers: [FormsService, SurveysService, PrismaService],
  controllers: [SurveysController]
})
export class SurveysModule {}
