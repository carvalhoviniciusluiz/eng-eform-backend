import { Module } from '@nestjs/common';
import { PrismaService } from '~/common/service';
import { FormInputsController } from '~/form-inputs/form-inputs.controller';
import { FormInputsService } from '~/form-inputs/form-inputs.service';

@Module({
  providers: [FormInputsService, PrismaService],
  controllers: [FormInputsController]
})
export class FormInputsModule {}
