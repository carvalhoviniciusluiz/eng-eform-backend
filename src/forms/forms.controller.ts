import {
  BadRequestException,
  Body,
  CacheInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Form as FormModel, User as UserModel } from '@prisma/client';
import { GetUser, Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import { FormPaginateDTO, FormRequestDTO } from '~/forms/dtos';
import { FormPaginateResponseDto } from '~/forms/dtos/form-paginate.response.dto';
import { FormsService } from '~/forms/forms.service';

@ApiTags('Forms')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('forms')
export class FormsController {
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

  @Get('/:id')
  async getForm(@Param('id') id: string): Promise<FormModel> {
    return this.formService.getForm({
      id
    });
  }

  @Post()
  async createForm(@Body() formData: FormRequestDTO, @GetUser() user: UserModel): Promise<FormModel> {
    const { name } = formData;
    try {
      const newUser = await this.formService.create({
        name,
        author: {
          connect: {
            id: user.id
          }
        },
        authorDraft: JSON.stringify({
          id: user.id,
          email: user.email,
          updatedAt: user.updatedAt
        }),
        company: {
          connect: {
            id: user.companyId
          }
        }
      });

      return newUser;
    } catch (error) {
      const hasCompanyId = !!user.companyId;
      let message;
      if (!hasCompanyId) {
        message = `User "${user.id}" not have company`;
      }
      throw new BadRequestException(message);
    }
  }

  @Patch('/:id')
  async updateForm(
    @Param('id') id: string,
    @Body() formData: FormRequestDTO,
    @GetUser() user: UserModel
  ): Promise<FormModel> {
    const { name } = formData;
    return this.formService.update({
      where: {
        id
      },
      data: {
        name,
        author: {
          connect: {
            id: user.id
          }
        },
        authorDraft: JSON.stringify({
          id: user.id,
          email: user.email,
          updatedAt: user.updatedAt
        })
      }
    });
  }

  @Delete('/:id')
  async deleteForm(@Param('id') id: string): Promise<FormModel> {
    return this.formService.delete({ id });
  }
}
