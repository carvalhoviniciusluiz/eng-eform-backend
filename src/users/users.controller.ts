import {
  BadRequestException,
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
import { UserPaginateDTO, UserRequestDTO } from '~/users/dtos';
import { UserPaginateResponseDto } from '~/users/dtos/user-paginate.response.dto';
import { UsersService } from '~/users/users.service';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(@Query() params: UserPaginateDTO): Promise<UserPaginateResponseDto> {
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
      throw new BadRequestException();
    }
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.getUser({
      id
    });
  }

  @Post()
  async createUser(@Body() userData: UserRequestDTO): Promise<UserModel> {
    return this.userService.create(userData);
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: string, @Body() userData: UserRequestDTO): Promise<UserModel> {
    return this.userService.update({
      where: {
        id
      },
      data: userData
    });
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.delete({ id });
  }
}
