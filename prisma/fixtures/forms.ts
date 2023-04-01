import { Company as CompanyModel, User as UserModel } from '@prisma/client';
import * as faker from 'faker';

const getIndex = (index: number) => Math.floor(Math.random() * index);

export const generateFormsList = (companies: CompanyModel[], users: UserModel[], count = 50) => {
  const company = companies[getIndex(companies.length - 1)];
  const user = users[getIndex(users.length - 1)];

  return [...Array(count).keys()].map(() => ({
    name: faker.random.words(),
    companyId: company?.id,
    authorId: user?.id,
    authorDraft: JSON.stringify(user)
  }));
};
