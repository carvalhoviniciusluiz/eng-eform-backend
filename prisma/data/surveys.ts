import { Form as FormModel } from '@prisma/client';
import * as faker from 'faker';

const getIndex = () => Math.floor(Math.random() * 6);

export const generateSuerveyList = (forms: FormModel[], count = 100) => {
  return [...Array(count).keys()].map(() => ({
    name: faker.random.words(),
    formId: forms[getIndex()].id
  }));
};
