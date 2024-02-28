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
    return people;
  }
}
