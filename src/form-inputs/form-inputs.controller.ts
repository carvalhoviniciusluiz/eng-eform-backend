import { BadRequestException, Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import { ValueError } from '~/form-inputs/error';
import { FormInputsService } from '~/form-inputs/form-inputs.service';

@ApiTags('FormInputs')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('form-inputs')
export class FormInputsController {
  constructor(private readonly formInputsService: FormInputsService) {}

  @Get()
  async getPersonInputsByVictimAndAggressorAndProtocol(@Query() params: any) {
    const output = await this.formInputsService.getPersonInputsByVictimAndAggressorAndProtocol(params);
    return output.map(item => ({
      id: item.id,
      number: item.number,
      details: item.details
    }));
  }

  @Get('/protocols')
  async getPersonInputsIdAndNumber() {
    return this.formInputsService.getPersonInputsIdAndNumber();
  }

  @Post()
  async createFormInput(@Body() inputData: any): Promise<any> {
    try {
      const output = await this.formInputsService.createFormInput(inputData);
      return output;
    } catch (error) {
      console.log(error);

      const isValueError = error instanceof ValueError;
      if (isValueError) {
        throw new BadRequestException(`NAME_ALREADY_EXISTS::${error.message}`, {
          cause: new Error(),
          description: error.message
        });
      }
      throw new BadRequestException();
    }
  }
}
