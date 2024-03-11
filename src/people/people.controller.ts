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
  async getPerson(@Param('name') name: string) {
    try {
      const output = await this.peopleService.getPerson(name);
      return output;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
