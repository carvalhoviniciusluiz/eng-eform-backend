import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/common/service';

@Injectable()
export class PeopleService {
  constructor(private readonly prisma: PrismaService) {}

  async getPerson(params: any) {
    const { name } = params;
    const person = this.prisma.person.findFirstOrThrow({
      where: {
        name
      },
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
      }
    });
    return person;
  }
}
