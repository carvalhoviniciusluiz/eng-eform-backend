import { Injectable } from '@nestjs/common';
import { PersonType } from '@prisma/client';
import { PrismaService } from '~/common/service';

@Injectable()
export class PeopleService {
  constructor(private readonly prisma: PrismaService) {}

  async getPeople(params: any) {
    const { personType } = params;
    const isVictim = personType === PersonType.VICTIM;
    const people = await this.prisma.personInputDetail.findMany({
      where: {
        personType: isVictim ? 'VICTIM' : 'AGGRESSOR'
      },
      select: {
        person: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
    return people;
  }

  async getPerson(name: string) {
    if (!name) {
      throw new Error(`Name param not found`);
    }
    const people = await this.prisma.person.findMany({
      include: {
        adresses: true,
        contacts: true,
        documents: true,
        personalData: {
          include: {
            questionAnswer: {
              include: {
                question: true,
                answer: true
              }
            }
          }
        }
      },
      where: {
        name: {
          contains: name
        }
      }
    });
    const output = people.map(res => {
      return {
        person: {
          id: res.id,
          name: res.name,
          socialName: res.socialName,
          birthDate: res.birthDate
        },
        adresses: res.adresses.map((address: any) => ({
          id: address.id,
          number: address.number,
          zipCode: address.zipCode,
          publicPlace: address.publicPlace,
          neighborhood: address.neighborhood,
          neighborhoodComplement: address.neighborhoodComplement,
          county: address.county,
          city: address.city
        })),
        documents: res.documents.map(document => ({
          id: document.id,
          documentType: document.documentType,
          documentNumber: document.documentNumber,
          shippingDate: document.shippingDate
        })),
        contacts: res.contacts.map(contact => ({
          id: contact.id,
          contactType: contact.contactType,
          contact: contact.contact
        })),
        questions: res.personalData.map(data => {
          const hasResponse = !!data.questionAnswer.response;
          const hasAnswer = !!data.questionAnswer.answer;
          let content: any = {};
          if (hasAnswer && hasResponse) {
            content[data.questionAnswer.answer.id] = data.questionAnswer.response;
          } else if (hasAnswer && !hasResponse) {
            content = data.questionAnswer.answer.id;
          } else if (hasResponse) {
            content['response'] = data.questionAnswer.response;
          }
          return {
            [data.questionAnswer.question.id]: content,
            metadata: {
              personQuestionAnswerId: data.id,
              questionAnswerId: data.questionAnswer.id
            }
          };
        })
      };
    });
    return output;
  }
}
