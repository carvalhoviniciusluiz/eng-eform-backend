import { Injectable } from '@nestjs/common';
import { ContactType, DocumentType } from '@prisma/client';
import { randomUUID } from 'crypto';
import { nanoid } from 'nanoid';
import { PrismaService } from '~/common/service';

interface Questions {
  [questionId: string]: string | string[] | { response: string } | Questions;
}

interface Person {
  id: string;
  name: string;
  socialName: string;
  birthDate: string;
}

interface Address {
  neighborhood: string;
  neighborhoodComplement: string;
  zipCode: string;
  ddd: string;
  city: string;
  county: string;
  number: string;
  publicPlace: string;
  id: string;
}

interface Contact {
  contactType: string;
  contact: string;
  id: string;
}

interface Document {
  documentType: string;
  documentNumber: string;
  id: string;
}

interface PersonInputProps {
  person: Person;
  questions: Questions;
  adresses: Address[];
  contacts: Contact[];
  documents: Document[];
}

interface MainForm {
  [mainFormId: string]: {
    [questionId: string]: Questions;
  };
}

type InputProps = {
  victim: PersonInputProps;
  aggressor: PersonInputProps;
  mainForms: MainForm;
};

@Injectable()
export class FormInputsService {
  constructor(private readonly prisma: PrismaService) {}

  private isObject(obj: any) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
  }

  private fixIds(array: { id: string }[]) {
    const idCount: Record<string, number> = {};
    array.forEach(obj => {
      if (idCount[obj.id]) {
        idCount[obj.id]++;
      } else {
        idCount[obj.id] = 1;
      }
    });
    const newArray = array.map(obj => {
      if (idCount[obj.id] > 1) {
        let newId: string;
        do {
          newId = randomUUID();
        } while (idCount[newId]);
        idCount[newId] = 1;
        return { ...obj, id: newId };
      }
      return obj;
    });
    return newArray;
  }

  private createQuestionAnswer(formId: string, data: Questions): any[] {
    const questionIds = Object.keys(data);
    const ids = questionIds.reduce((acc, questionId) => {
      const id = crypto.randomUUID();
      const answerData = data[questionId as any];
      const isObject = this.isObject(answerData);
      const isArray = Array.isArray(answerData);
      if (isObject) {
        const [answerId] = Object.keys(answerData);
        const [response] = Object.values(answerData);
        const opt = answerId.includes('response')
          ? { id, formId, questionId, response }
          : { id, formId, questionId, answerId, response };
        acc.push(opt);
      } else if (isArray) {
        for (const value of answerData) {
          acc.push({
            id,
            formId,
            questionId,
            answerId: value
          });
        }
      } else {
        acc.push({
          id,
          formId,
          questionId,
          answerId: answerData
        });
      }
      return acc;
    }, []);
    return this.fixIds(ids);
  }

  async persistpeopleAndAnswers({
    input,
    personInputId,
    formId,
    prisma
  }: {
    input: PersonInputProps;
    personInputId: string;
    formId: string;
    prisma: any;
  }) {
    const birthDateValue = input.person?.birthDate.split('/').reverse().join('-');
    const birthDate = !!birthDateValue ? new Date(birthDateValue) : null;
    const { id: personId } = await prisma.person.create({
      data: {
        id: input.person.id,
        name: input.person.name,
        socialName: input.person.socialName,
        birthDate
      }
    });
    await prisma.personAddress.createMany({
      data: input.adresses.map(address => ({
        id: address.id,
        city: address.city,
        county: address.county,
        neighborhood: address.neighborhood,
        neighborhoodComplement: address.neighborhoodComplement,
        number: address?.number ?? null,
        publicPlace: address.publicPlace,
        zipCode: address.zipCode,
        personId
      }))
    });
    await prisma.personContact.createMany({
      data: input.contacts.map(contact => ({
        id: contact.id,
        contact: contact.contact,
        contactType: contact.contactType as ContactType,
        personId
      }))
    });
    await prisma.personDocument.createMany({
      data: input.documents.map(document => ({
        id: document.id,
        documentNumber: document.documentNumber,
        documentType: document.documentType as DocumentType,
        personId
      }))
    });

    const questionAnswers = this.createQuestionAnswer(formId, input.questions);
    await prisma.questionAnswer.createMany({
      data: questionAnswers
    });
    await prisma.personQuestionAnswer.createMany({
      data: questionAnswers.map(questionAnswer => ({
        personId,
        personInputId,
        questionAnswerId: questionAnswer.id
      }))
    });
  }

  async createFormInput(inputData: InputProps) {
    const { aggressor, mainForms, victim } = inputData;
    if (!aggressor || !mainForms || !victim) {
      throw new Error('Insufficient data');
    }
    // console.log(JSON.stringify({ aggressor, mainForms, victim }, null, 4));
    try {
      await this.prisma.$transaction(async prisma => {
        const options = {
          personInputId: randomUUID(),
          formId: 'f594187f-504c-4266-b313-6d1fb19bb197',
          prisma
        };
        await prisma.personInput.createMany({
          data: {
            id: options.personInputId,
            number: nanoid(16)
          }
        });
        await this.persistpeopleAndAnswers({
          ...options,
          input: victim
        });
        await this.persistpeopleAndAnswers({
          ...options,
          input: aggressor
        });
        const questionAnswerIds = [];
        for (const [formId, questions] of Object.entries(mainForms)) {
          const questionAnswers = this.createQuestionAnswer(formId, questions);
          await prisma.questionAnswer.createMany({
            data: questionAnswers
          });
          questionAnswerIds.push(questionAnswers);
        }
        const personInputQuestionAnswers = questionAnswerIds.flat().map(questionAnswer => ({
          id: randomUUID(),
          personInputId: options.personInputId,
          questionAnswerId: questionAnswer.id
        }));
        await prisma.personInputQuestionAnswer.createMany({
          data: personInputQuestionAnswers
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
