import { BadRequestException, Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { GetUser, Roles } from '~/common/decorators';
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
    return output;
  }

  @Get('/protocols')
  async getPersonInputsIdAndNumber() {
    return this.formInputsService.getPersonInputsIdAndNumber();
  }

  @Get('/:processNumber')
  async getFormByProcessNumber(@Param('processNumber') processNumber: string, @GetUser() user: UserModel) {
    try {
      return this.formInputsService.getFormByProcessNumber(processNumber, user);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Post()
  async createFormInput(@Body() inputData: any, @GetUser() user: UserModel): Promise<any> {
    try {
      const output = await this.formInputsService.createFormInput(inputData, user);
      return output;
    } catch (error) {
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
