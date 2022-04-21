import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { AuthController } from '~/auth/auth.controller';
import { AuthModule } from '~/auth/auth.module';
import { AuthService } from '~/auth/auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule]
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return credentials data', async () => {
    jest.spyOn(service, 'signIn').mockImplementationOnce(async () => ({} as any));
    const response = await controller.signIn({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    expect(response).toEqual({});
  });

  it('should return credentials data', async () => {
    jest.spyOn(service, 'signUp').mockImplementationOnce(async () => ({} as any));
    const response = await controller.signUp({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    expect(response).toBeUndefined();
  });

  it('should throw P2002 error', async () => {
    class RequestError extends Error {
      code = 'P2002';
    }
    jest.spyOn(service, 'signUp').mockImplementationOnce(async () => {
      throw new RequestError();
    });
    const promise = controller.signUp({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    await expect(promise).rejects.toThrow('A new user cannot be created with this email');
  });

  it('should throw any error', async () => {
    class RequestError extends Error {}
    jest.spyOn(service, 'signUp').mockImplementationOnce(async () => {
      throw new RequestError();
    });
    const promise = controller.signUp({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    await expect(promise).rejects.toThrowError();
  });
});
