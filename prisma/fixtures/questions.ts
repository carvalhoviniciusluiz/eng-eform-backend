import { Form as FormModel } from '@prisma/client';
import * as faker from 'faker';

const getIndex = (index: number) => Math.floor(Math.random() * index);

export const generateQuestionList = (forms: FormModel[], count = 100) => {
  return [...Array(count).keys()].map(() => ({
    content: faker.random.words(),
    formId: forms[getIndex(forms.length - 1)].id
  }));
};
