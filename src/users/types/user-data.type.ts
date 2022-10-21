import { Company as CompanyModel, User as UserModel } from '@prisma/client';

export type UserData = UserModel & {
  company: CompanyModel;
};
