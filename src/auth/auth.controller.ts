import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '~/auth/auth.service';
import { AuthCredentialsRequestDTO, AuthSignUpRequestDTO } from '~/auth/dtos';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signIn(@Body() params: AuthCredentialsRequestDTO) {
    return this.authService.signIn(params);
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
}
