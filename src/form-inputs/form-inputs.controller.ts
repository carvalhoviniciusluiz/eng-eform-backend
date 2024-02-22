import { BadRequestException, Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import { FormInputsService } from '~/form-inputs/form-inputs.service';

@ApiTags('FormInputs')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('form-inputs')
export class FormInputsController {
  constructor(private readonly formInputsService: FormInputsService) {}

  @Post()
  async createFormInput(@Body() inputData: any): Promise<any> {
    try {
      return this.formInputsService.createFormInput(inputData);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
