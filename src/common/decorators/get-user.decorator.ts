import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';

export const GetUser = createParamDecorator((_, ctx: ExecutionContext): UserModel => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
