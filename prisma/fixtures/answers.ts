import { Question as QuestionModel } from '@prisma/client';
import * as faker from 'faker';

const getIndex = (index: number) => Math.floor(Math.random() * index);

export const generateAnswerList = (questions: QuestionModel[], count = 100) => {
  return [...Array(count).keys()].map(() => ({
    content: faker.random.words(),
    questionId: questions[getIndex(questions.length - 1)].id
  }));
};
