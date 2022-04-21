import { Module } from '@nestjs/common';
import { RootController } from '~/root/root.controller';
import { RootService } from '~/root/root.service';

@Module({
  controllers: [RootController],
  providers: [RootService],
  exports: [RootService]
})
export class RootModule {}
