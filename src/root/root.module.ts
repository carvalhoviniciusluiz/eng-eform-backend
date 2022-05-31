import { Module } from '@nestjs/common';
import { PrismaService } from '~/common/service';
import { RootController } from '~/root/root.controller';
import { RootService } from '~/root/root.service';

@Module({
  controllers: [RootController],
  providers: [RootService, PrismaService]
})
export class RootModule {}
