import { Module } from '@nestjs/common';
import { AppLogger } from '~/app.logger';
import { PrismaService } from '~/common/service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, PrismaService, AppLogger],
  controllers: [UsersController]
})
export class UsersModule {}
