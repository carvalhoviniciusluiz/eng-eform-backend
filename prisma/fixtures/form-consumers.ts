import { Form as FormModel, User as UserModel } from '@prisma/client';

const getIndex = (index: number) => Math.floor(Math.random() * index);

export const generateFormConsumerList = (forms: FormModel[], users: UserModel[], count = 50) => {
  return [...Array(count).keys()].map(() => {
    const form = forms[getIndex(forms.length - 1)];
    const user = users[getIndex(users.length - 1)];

    return {
      userId: user?.id,
      formId: form?.id
    };
  });
};
