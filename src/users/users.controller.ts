import {
  Body,
  CacheInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { AppLogger } from '~/app.logger';
import { BaseController } from '~/common/controllers/base.controller';
import { GetUser, Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import { UserPaginateDTO, UserPaginateResponseDto, UserRequestDTO, UserResponseDto } from '~/users/dtos';
import { UserData } from '~/users/types';
import { UsersService } from '~/users/users.service';

@ApiTags('Users')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('users')
export class UsersController extends BaseController {
  constructor(private readonly userService: UsersService, readonly logger: AppLogger) {
    super(logger, UsersController.name);
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(@GetUser() user: UserModel, @Query() params: UserPaginateDTO): Promise<UserPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { email: 'asc' }, email } = params;
    const hasEmail = !!email;
    const options = hasEmail
      ? {
          where: {
            email: {
              startsWith: email
            }
          }
        }
      : {
          skip,
          take,
          orderBy
        };

    try {
      const { users, count } = await this.userService.getAll(options);
      return new UserPaginateResponseDto(users, take, skip, count);
    } catch (error) {
      this.reportLoggerAndThrowException(error, options);
    }
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<UserResponseDto> {
    try {
      const user = await this.userService.getUser({
        id
      });

      return new UserResponseDto(user as UserData);
    } catch (error) {
      this.reportLoggerAndThrowException(error, { id });
    }
  }

  @Post()
  async createUser(@Body() userData: UserRequestDTO): Promise<UserModel> {
    try {
      return this.userService.create(userData);
    } catch (error) {
      this.reportLoggerAndThrowException(error, userData);
    }
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: string, @Body() userData: UserRequestDTO): Promise<UserModel> {
    const options = {
      where: {
        id
      },
      data: userData
    };

    try {
      return this.userService.update(options);
    } catch (error) {
      this.reportLoggerAndThrowException(error, options);
    }
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    try {
      return this.userService.delete({ id });
    } catch (error) {
      this.reportLoggerAndThrowException(error, { id });
    }
  }
}
