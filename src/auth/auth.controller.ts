import { BadRequestException, Body, Controller, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { AuthService } from '~/auth/auth.service';
import { AuthCredentialsRequestDTO, AuthSignUpRequestDTO } from '~/auth/dtos';
import { GetUser } from '~/common/decorators';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signIn(@Body() params: AuthCredentialsRequestDTO) {
    try {
      return await this.authService.signIn(params);
    } catch (error) {
      if (error.status === 401) {
        throw new UnauthorizedException();
      }

      throw new BadRequestException();
    }
  }

  @Post('/signup')
  async signUp(@Body() params: AuthSignUpRequestDTO) {
    try {
      await this.authService.signUp(params);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('A new user cannot be created with this email');
      }
      throw error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/refreshToken')
  async refreshToken(@GetUser() user: UserModel) {
    return this.authService.generateToken(user);
  }
}
