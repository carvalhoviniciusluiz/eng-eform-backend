import { UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { User as UserModel } from '@prisma/client';
import * as faker from 'faker';
import { AuthModule } from '~/auth/auth.module';
import { AuthService } from '~/auth/auth.service';
import { UsersService } from '~/users/users.service';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule]
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate new token', async () => {
    const response = await service.generatePasswordHashed(faker.internet.password());
    expect(response).not.toBeNull();
  });

  it('should throw UnauthorizedException with user undefined', async () => {
    jest.spyOn(usersService, 'getUser').mockImplementationOnce(() => undefined);

    const promise = service.signIn({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    await expect(promise).rejects.toThrow(new UnauthorizedException());
  });

  it('should throw UnauthorizedException with password error', async () => {
    jest.spyOn(usersService, 'getUser').mockImplementationOnce(
      async () =>
        ({
          passwordHashed: faker.datatype.hexaDecimal()
        } as UserModel)
    );
    const promise = service.signIn({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    await expect(promise).rejects.toThrow(new UnauthorizedException());
  });

  it('should ensure success', async () => {
    jest.spyOn(usersService, 'getUser').mockImplementationOnce(async () => ({} as UserModel));
    jest.spyOn(service, 'validateUserPassword').mockImplementationOnce(async () => true);
    const response = await service.signIn({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    const { accessToken, accessTokenExpiresIn, refreshToken, refreshTokenExpiresIn, tokenType } = response;
    expect(accessToken).not.toBeUndefined();
    expect(accessTokenExpiresIn).not.toBeUndefined();
    expect(refreshToken).not.toBeUndefined();
    expect(refreshTokenExpiresIn).not.toBeUndefined();
    expect(tokenType).toBe('bearer');
  });

  it('should ensure new account', async () => {
    const id = faker.datatype.uuid();
    jest.spyOn(usersService, 'create').mockImplementationOnce(async () => ({ id } as UserModel));
    jest.spyOn(service, 'generatePasswordHashed').mockImplementationOnce(async () => faker.datatype.uuid());
    const response = await service.signUp({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    expect(response.id).toBe(id);
  });
});
