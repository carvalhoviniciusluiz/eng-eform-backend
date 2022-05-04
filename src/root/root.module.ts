import { Module } from '@nestjs/common';
import { PrismaService } from '~/common/service';
import { FormsService } from '~/forms/forms.service';
import { RootController } from '~/root/root.controller';

@Module({
  controllers: [RootController],
  providers: [FormsService, PrismaService]
})
export class RootModule {}
