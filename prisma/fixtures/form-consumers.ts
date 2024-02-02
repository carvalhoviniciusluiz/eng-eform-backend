import { Company as CompanyModel, Form as FormModel } from '@prisma/client';

const getIndex = (index: number) => Math.floor(Math.random() * index);

export const generateFormConsumerList = (forms: FormModel[], companies: CompanyModel[], count = 50) => {
  return [...Array(count).keys()].map(() => {
    const form = forms[getIndex(forms.length - 1)];
    const company = companies[getIndex(companies.length - 1)];
    return {
      companyId: company?.id,
      formId: form?.id
    };
  });
};
