import { PrismaClient } from '@prisma/client';
import {
  generateAnswerList,
  generateCompanyList,
  generateFormConsumerList,
  generateFormsList,
  generateQuestionList,
  generateUserList
} from './fixtures';
const prisma = new PrismaClient();

const main = async () => {
  await prisma.company.createMany({
    data: generateCompanyList()
  });

  const companyList = await prisma.company.findMany();

  await prisma.user.createMany({
    data: generateUserList(companyList)
  });

  const userList = await prisma.user.findMany();

  await prisma.form.createMany({
    data: generateFormsList(companyList, userList)
  });

  const formList = await prisma.form.findMany();

  await prisma.formConsumer.createMany({
    data: generateFormConsumerList(formList, companyList)
  });

  await prisma.question.createMany({
    data: generateQuestionList(formList)
  });

  const questionList = await prisma.question.findMany();

  await prisma.answer.createMany({
    data: generateAnswerList(questionList)
  });
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
