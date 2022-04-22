import { Survey as SurveyModel } from '@prisma/client';
import * as faker from 'faker';

const getIndex = (index: number) => Math.floor(Math.random() * index);

export const generateQuestionList = (surveys: SurveyModel[], count = 100) => {
  return [...Array(count).keys()].map(() => ({
    content: faker.random.words(),
    surveyId: surveys[getIndex(surveys.length - 1)].id
  }));
};
