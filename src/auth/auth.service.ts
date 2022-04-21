import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { User as UserModel } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { JWT_SECRET_REFRESHTOKEN, JWT_SECRET_REFRESHTOKEN_EXPIRES_IN } from '~/app.vars';
import { UsersService } from '~/users/users.service';

type AccessTokenDecoded = {
  exp: number;
};

type SignInParams = {
  email: string;
  password: string;
};

type SignUpParams = {
  email: string;
  password: string;
};

type SignInResponse = {
  accessToken: string;
  accessTokenExpiresIn: number;
  refreshToken: string;
  refreshTokenExpiresIn: number;
  tokenType: string;
  user: {
    id: string;
    email: string;
    updatedAt: Date;
  };
};

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async validateUserPassword(password: string, passwordHashed: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHashed);
  }

  async generatePasswordHashed(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async signIn(params: SignInParams): Promise<SignInResponse> {
    const { email, password } = params;
    const user = await this.usersService.getUser({
      email
    });
    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await this.validateUserPassword(password, user.passwordHashed);
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { email };
    const accessToken = this.jwtService.sign(payload);
    const accessTokenDecoded = this.jwtService.decode(accessToken) as AccessTokenDecoded;
    const accessTokenExpiresIn = accessTokenDecoded.exp;

    const refreshTokenOptions: JwtSignOptions = {
      expiresIn: JWT_SECRET_REFRESHTOKEN_EXPIRES_IN,
      secret: JWT_SECRET_REFRESHTOKEN
    };

    const refreshToken = this.jwtService.sign(payload, refreshTokenOptions);
    const refreshTokenDecoded = this.jwtService.decode(refreshToken) as AccessTokenDecoded;
    const refreshTokenExpiresIn = refreshTokenDecoded.exp;

    return {
      accessToken,
      accessTokenExpiresIn,
      refreshToken,
      refreshTokenExpiresIn,
      tokenType: 'bearer',
      user: {
        id: user.id,
        email: user.email,
        updatedAt: user.updatedAt
      }
    };
  }

  async signUp(params: SignUpParams): Promise<UserModel> {
    const { email, password } = params;
    const passwordHashed = await this.generatePasswordHashed(password);
    return this.usersService.create({
      email,
      passwordHashed
    });
  }
}
