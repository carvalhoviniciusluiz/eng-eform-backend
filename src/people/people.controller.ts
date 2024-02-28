import { BadRequestException, Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
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
  async getPeople(@Query() params: any) {
    const output = await this.peopleService.getPeople(params);
    return output.map(({ person }) => ({
      id: person.id,
      name: person.name
    }));
  }

  @Get('/:name')
  async getPerson(@Param(':name') name: string) {
    try {
      const response = await this.peopleService.getPerson(name);
      const output = response.map(res => {
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
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
