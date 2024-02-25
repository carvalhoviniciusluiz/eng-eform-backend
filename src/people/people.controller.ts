import { BadRequestException, Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import { PeopleService } from '~/people/people.service';

@ApiTags('People')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  async getPerson(@Query() params: any) {
    try {
      const output = await this.peopleService.getPerson(params);
      return {
        id: output.id,
        name: output.name,
        socialName: output.socialName,
        birthDate: output.birthDate,
        adresses: output.adresses.map((address: any) => ({
          id: address.id,
          number: address.number,
          zipCode: address.zipCode,
          publicPlace: address.publicPlace,
          neighborhood: address.neighborhood,
          neighborhoodComplement: address.neighborhoodComplement,
          county: address.county,
          city: address.city
        })),
        documents: output.documents.map(document => ({
          id: document.id,
          documentType: document.documentType,
          documentNumber: document.documentNumber,
          shippingDate: document.shippingDate
        })),
        contacts: output.contacts.map(contact => ({
          id: contact.id,
          contactType: contact.contactType,
          contact: contact.contact
        })),
        personalData: output.personalData.map(data => ({
          questionAnswer: {
            id: data.questionAnswer.id,
            response: data.questionAnswer.response,
            question: {
              id: data.questionAnswer.question.id,
              content: data.questionAnswer.question.content
            },
            answer: {
              id: data.questionAnswer.answer?.id,
              content: data.questionAnswer.answer?.content
            }
          }
        }))
      };
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
