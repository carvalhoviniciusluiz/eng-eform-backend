import * as faker from 'faker';

export const generateCompanyList = (count = 6) =>
  [...Array(count).keys()].map((_, index) => ({
    name: faker.company.companyName(),
    initials: `${faker.company.companySuffix()}-${index}`
  }));
