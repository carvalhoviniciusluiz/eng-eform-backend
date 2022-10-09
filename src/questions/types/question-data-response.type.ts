type Question = {
  id: string;
  content: string;
  updatedAt: Date;
};

export type QuestionDataResponse = Question & {
  form: {
    id: string;
    name: string;
    updatedAt: Date;
  };
  parent?: Question;
};
