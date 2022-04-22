import { Module } from '@nestjs/common';
import { PrismaService } from '~/common/service';
import { FormsController } from '~/forms/forms.controller';
import { FormsService } from '~/forms/forms.service';

@Module({
  providers: [FormsService, PrismaService],
  controllers: [FormsController]
})
export class FormsModule {}
