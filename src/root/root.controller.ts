import {
  BadRequestException,
  CacheInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
  VERSION_NEUTRAL
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FormPaginateDTO, FormPaginateResponseDto } from '~/forms/dtos';
import { FormsService } from '~/forms/forms.service';

@ApiTags('Root')
@Controller({
  version: VERSION_NEUTRAL
})
export class RootController {
  constructor(private readonly formService: FormsService) {}

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
      const { forms, count } = await this.formService.getAll(options);
      return new FormPaginateResponseDto(forms, take, skip, count);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
