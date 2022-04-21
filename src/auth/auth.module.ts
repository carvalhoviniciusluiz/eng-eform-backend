import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JWT_SECRET, JWT_SECRET_EXPIRES_IN } from '~/app.vars';
import { AuthController } from '~/auth/auth.controller';
import { AuthService } from '~/auth/auth.service';
import { JwtStrategy } from '~/auth/strategies';
import { PrismaService } from '~/common/service';
import { UsersService } from '~/users/users.service';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: JWT_SECRET_EXPIRES_IN
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UsersService, PrismaService],
  exports: [PassportModule, AuthService, JwtStrategy]
})
export class AuthModule {}
