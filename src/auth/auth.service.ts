import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { User as UserModel } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { JWT_SECRET_REFRESHTOKEN_EXPIRES_IN } from '~/app.vars';
import { UsersService } from '~/users/users.service';

type AccessTokenDecoded = {
  exp: number;
};

type SignInParams = {
  email: string;
  password: string;
};

type SignUpParams = {
  username?: string;
  email: string;
  password: string;
};

type CredentialsResponse = {
  accessToken: string;
  accessTokenExpiresIn: number;
  refreshToken: string;
  refreshTokenExpiresIn: number;
  tokenType: string;
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

  async generateToken(user: UserModel): Promise<CredentialsResponse> {
    const payload = {
      email: user.email,
      updatedAt: user.updatedAt
    };
    const accessToken = this.jwtService.sign(payload);
    const accessTokenDecoded = this.jwtService.decode(accessToken) as AccessTokenDecoded;
    const accessTokenExpiresIn = accessTokenDecoded.exp;
    const refreshTokenOptions: JwtSignOptions = {
      expiresIn: JWT_SECRET_REFRESHTOKEN_EXPIRES_IN
    };
    const refreshToken = this.jwtService.sign(payload, refreshTokenOptions);
    const refreshTokenDecoded = this.jwtService.decode(refreshToken) as AccessTokenDecoded;
    const refreshTokenExpiresIn = refreshTokenDecoded.exp;
    return {
      accessToken,
      accessTokenExpiresIn,
      refreshToken,
      refreshTokenExpiresIn,
      tokenType: 'bearer'
    };
  }

  async signIn(params: SignInParams): Promise<CredentialsResponse> {
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
    return this.generateToken(user);
  }

  async signUp(params: SignUpParams): Promise<UserModel> {
    const { username, email, password } = params;
    const passwordHashed = await this.generatePasswordHashed(password);
    return this.usersService.create({
      email,
      username: username ? username : email.split('@')[0],
      passwordHashed
    });
  }
}
