export type SurveyDataResponse = {
  id: string;
  name: string;
  updatedAt: Date;
  form: {
    id: string;
    name: string;
    updatedAt: Date;
  };
  parent?: {
    id: string;
    name: string;
    updatedAt: Date;
  };
};
