import {
  BadRequestException,
  Body,
  CacheInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
  VERSION_NEUTRAL
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FormPaginateDTO, FormPaginateResponseDto, FormWithQuestionsResponseDto } from '~/forms/dtos';
import { RootService } from '~/root/root.service';

@ApiTags('Root')
@Controller({
  version: VERSION_NEUTRAL
})
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(@Query() params: FormPaginateDTO): Promise<FormPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { name: 'asc' }, name } = params;
    const hasName = !!name;
    const options = hasName
      ? {
          where: {
            name: {
              startsWith: name
            }
          }
        }
      : {
          skip,
          take,
          orderBy
        };

    try {
      const { forms, count } = await this.rootService.getAll(options);
      return new FormPaginateResponseDto(forms, take, skip, count);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get('/:id')
  async getForm(@Param('id') id: string): Promise<any> {
    try {
      const { questions, ...form } = await this.rootService.getForm({
        id
      });

      return new FormWithQuestionsResponseDto({ form, questions });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Post('/:id')
  async saveQuestionAnswers(
    @Param('id') formId: string,
    @Body() requestData: { [key: string]: string | string[] }[]
  ): Promise<void> {
    try {
      await this.rootService.saveQuestionAnswers({
        formId,
        data: requestData
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
