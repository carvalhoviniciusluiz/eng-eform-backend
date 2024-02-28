import { Injectable } from '@nestjs/common';
import { ContactType, DocumentType, PersonType } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from '~/common/service';
import { DataBaseError, UnexpectedError } from '~/form-inputs/error';

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
  id: string;
  neighborhood: string;
  neighborhoodComplement: string;
  zipCode: string;
  ddd: string;
  city: string;
  county: string;
  number: string;
  publicPlace: string;
}
interface Contact {
  id: string;
  contactType: string;
  contact: string;
}
interface Document {
  id: string;
  documentType: string;
  documentNumber: string;
  shippingDate: string;
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
interface InputProps {
  victim: PersonInputProps;
  aggressor: PersonInputProps;
  mainForms: MainForm;
}

@Injectable()
export class FormInputsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPersonInputsIdAndNumber() {
    const personInputs = await this.prisma.personInput.findMany({
      select: {
        id: true,
        number: true
      }
    });
    return personInputs;
  }

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

  private rearrangeQuestionsForm(formId: string, data: Questions): any[] {
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

  private isDateValid(date: string) {
    return !isNaN(new Date(date) as any);
  }

  private parseDate(value: string) {
    const dateValue = value.split('/').reverse().join('-');
    const date = this.isDateValid(dateValue) ? new Date(dateValue) : null;
    return date;
  }

  async persistForPerson(formId: string, input: PersonInputProps) {
    const personData = {
      id: input.person.id,
      name: input.person.name,
      socialName: input.person.socialName,
      birthDate: this.parseDate(input.person.birthDate)
    };
    const personPersisted = await this.prisma.person.upsert({
      where: { id: input.person.id },
      update: personData,
      create: personData
    });
    input.adresses.forEach(async ads => {
      const data = {
        id: ads.id,
        city: ads.city,
        county: ads.county,
        neighborhood: ads.neighborhood,
        neighborhoodComplement: ads.neighborhoodComplement,
        number: ads?.number ?? null,
        publicPlace: ads.publicPlace,
        zipCode: ads.zipCode,
        personId: personPersisted.id
      };
      await this.prisma.personAddress.upsert({
        where: { id: ads.id },
        update: data,
        create: data
      });
    });
    input.contacts.forEach(async contact => {
      const contactData = {
        id: contact.id,
        contact: contact.contact,
        contactType: contact.contactType as ContactType,
        personId: personPersisted.id
      };
      await this.prisma.personContact.upsert({
        where: { id: contact.id },
        update: contactData,
        create: contactData
      });
    });
    input.documents.forEach(async document => {
      const documentData = {
        id: document.id,
        documentNumber: document.documentNumber,
        documentType: document.documentType as DocumentType,
        shippingDate: this.parseDate(document.shippingDate),
        personId: personPersisted.id
      };
      await this.prisma.personDocument.upsert({
        where: { id: document.id },
        update: documentData,
        create: documentData
      });
    });

    // condicao diferente se for edite

    const questionAnswers = this.rearrangeQuestionsForm(formId, input.questions);
    await this.prisma.questionAnswer.createMany({
      data: questionAnswers
    });
    await this.prisma.personQuestionAnswer.createMany({
      data: questionAnswers.map(questionAnswer => ({
        id: randomUUID(),
        personId: personPersisted.id,
        questionAnswerId: questionAnswer.id
      }))
    });
    return personPersisted;
  }

  async createFormInput(inputData: InputProps) {
    const { aggressor, mainForms, victim } = inputData;
    if (!aggressor || !mainForms || !victim) {
      throw new UnexpectedError('Insufficient data');
    }
    // const victimFound = await this.prisma.person.findFirst({
    //   where: {
    //     name: victim.person.name
    //   }
    // });
    // if (victimFound) {
    //   throw new ValueError(`VICTIM::${victimFound.id}`);
    // }
    // const aggressorFound = await this.prisma.person.findFirst({
    //   where: {
    //     name: aggressor.person.name
    //   }
    // });
    // if (aggressorFound) {
    //   throw new ValueError(`AGGRESSOR::${aggressorFound.id}`);
    // }
    // console.log(JSON.stringify({ aggressor, mainForms, victim }, null, 4));
    try {
      const personalDataFormId = 'f594187f-504c-4266-b313-6d1fb19bb197'; // TODO: default
      const firstPerson = await this.persistForPerson(personalDataFormId, victim);
      const secondPerson = await this.persistForPerson(personalDataFormId, aggressor);
      const personInputCount = await this.prisma.personInput.count();
      const personInput = await this.prisma.personInput.create({
        data: {
          id: randomUUID(),
          number: `${personInputCount + 1}`.toString().padStart(12, '0')
        }
      });
      await this.prisma.personInputDetail.createMany({
        data: [
          {
            id: randomUUID(),
            personType: PersonType.VICTIM,
            personId: firstPerson.id,
            personInputId: personInput.id
          },
          {
            id: randomUUID(),
            personType: PersonType.AGGRESSOR,
            personId: secondPerson.id,
            personInputId: personInput.id
          }
        ]
      });
      const questionAnswerList = [];
      for (const [formId, questions] of Object.entries(mainForms)) {
        const questionAnswers = this.rearrangeQuestionsForm(formId, questions);
        await this.prisma.questionAnswer.createMany({
          data: questionAnswers
        });
        questionAnswerList.push(questionAnswers);
      }
      const personInputQuestionAnswers = questionAnswerList.flat().map(questionAnswer => ({
        id: randomUUID(),
        formId: questionAnswer.formId,
        questionAnswerId: questionAnswer.id,
        personInputId: personInput.id
      }));
      await this.prisma.personInputQuestionAnswer.createMany({
        data: personInputQuestionAnswers
      });
    } catch (error) {
      throw new DataBaseError(error);
    }
  }
}
