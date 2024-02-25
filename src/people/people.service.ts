import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/common/service';

@Injectable()
export class PeopleService {
  constructor(private readonly prisma: PrismaService) {}

  async getPerson(params: any) {
    const { name } = params;
    if (!name) {
      throw new Error(`Name param not found`);
    }
    const people = this.prisma.person.findMany({
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
