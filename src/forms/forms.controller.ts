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
import { User as UserModel } from '@prisma/client';
import { GetUser, Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import {
  FormPaginateDTO,
  FormPaginateResponseDto,
  FormQueryDTO,
  FormRequestDTO,
  FormWithQuestionsResponseDto
} from '~/forms/dtos';
import { FormsService } from '~/forms/forms.service';

@ApiTags('Forms')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('forms')
export class FormsController {
  constructor(private readonly formService: FormsService) {}

  @UseInterceptors(CacheInterceptor)
  @Get('/:id/stats')
  async getStats(@Param('id') id: string) {
    try {
      return await this.formService.getStats(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(@Query() params: FormPaginateDTO, @GetUser() user: UserModel): Promise<FormPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { order: 'ASC' } } = params;
    try {
      const { forms, count } = await this.formService.getAll({
        companyId: user.companyId,
        skip,
        take,
        orderBy
      });
      return new FormPaginateResponseDto(forms, take, skip, count);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @UseInterceptors(CacheInterceptor)
  @Get('/full')
  async getFullForm(@Query() params: any, @GetUser() user: UserModel) {
    try {
      const forms = await this.formService.getFullForm(params, user.companyId);
      return forms;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get('/:id')
  async getForm(@Param('id') id: string, @Query() params: FormQueryDTO) {
    try {
      const { questions, ...form } = await this.formService.getForm({ id }, params.questionsShow);
      return new FormWithQuestionsResponseDto({ form, questions });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Post()
  async createForm(@Body() formData: FormRequestDTO, @GetUser() user: UserModel) {
    const { name, segment } = formData;
    try {
      const newForm = await this.formService.create({
        name,
        segment,
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
        companies: {
          create: {
            companyId: user.companyId
          }
        }
      });
      return newForm;
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
  async updateForm(@Param('id') id: string, @Body() formData: FormRequestDTO, @GetUser() user: UserModel) {
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
  async deleteForm(@Param('id') id: string) {
    return this.formService.delete({ id });
  }
}
