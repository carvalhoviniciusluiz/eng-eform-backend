import { Injectable } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { PrismaService } from '~/common/service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput
    });
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<{ count: number; users: UserModel[] }> {
    const { skip, take, where, orderBy } = params;
    const count = await this.prisma.user.count();
    const users = await this.prisma.user.findMany({
      skip,
      take,
      where,
      orderBy
    });

    return {
      count,
      users
    };
  }

  async create(data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.prisma.user.create({
      data
    });
  }

  async update(params: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput }): Promise<UserModel> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<UserModel> {
    return this.prisma.user.delete({
      where
    });
  }
}
