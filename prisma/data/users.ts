import { Company as CompanyModel } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as faker from 'faker';

const getCompanyIndex = () => Math.floor(Math.random() * 6);

export const generateUserList = (companies: CompanyModel[], count = 100) => {
  return [...Array(count).keys()].map(() => ({
    email: faker.internet.email(),
    passwordHashed: bcrypt.hashSync('Ch@nge123', 10),
    companyId: companies[getCompanyIndex()]?.id
  }));
};
