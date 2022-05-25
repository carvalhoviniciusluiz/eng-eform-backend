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
import { Survey as SurveyModel } from '@prisma/client';
import { Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import { SurveyPaginateDTO, SurveyPaginateResponseDto, SurveyRequestDTO } from '~/surveys/dtos';
import { SurveysService } from '~/surveys/surveys.service';

@ApiTags('Surveys')
@ApiBearerAuth()
@Roles('admin', 'master')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('forms/:formId/surveys')
export class SurveysController {
  constructor(private readonly surveyService: SurveysService) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(
    @Param('formId') formId: string,
    @Query() params: SurveyPaginateDTO
  ): Promise<SurveyPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { name: 'asc' }, name } = params;
    const hasName = !!name;
    const options = hasName
      ? {
          where: {
            name: {
              startsWith: name
            },
            formId
          }
        }
      : {
          where: {
            formId
          },
          skip,
          take,
          orderBy
        };

    try {
      const { surveys, count } = await this.surveyService.getAll(options);
      return new SurveyPaginateResponseDto(surveys, take, skip, count);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @UseInterceptors(CacheInterceptor)
  @Get('/:surveyId/surveys')
  async getChildAll(
    @Param('formId') formId: string,
    @Param('surveyId') surveyId: string,
    @Query() params: SurveyPaginateDTO
  ): Promise<SurveyPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { name: 'asc' }, name } = params;
    const hasName = !!name;
    const options = hasName
      ? {
          where: {
            name: {
              startsWith: name
            },
            formId,
            parentId: surveyId
          }
        }
      : {
          where: {
            formId,
            parentId: surveyId
          },
          skip,
          take,
          orderBy
        };

    try {
      const { surveys, count } = await this.surveyService.getAll(options);
      return new SurveyPaginateResponseDto(surveys, take, skip, count);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get('/:id')
  async getSurvey(@Param('id') id: string): Promise<SurveyModel> {
    return this.surveyService.getSurvey({
      id
    });
  }

  @Post()
  async createSurvey(@Param('formId') formId: string, @Body() surveyData: SurveyRequestDTO): Promise<SurveyModel> {
    const { name } = surveyData;
    return this.surveyService.create({
      name,
      form: {
        connect: {
          id: formId
        }
      }
    });
  }

  @Post('/:surveyId/surveys')
  async createSurveyChild(
    @Param('formId') formId: string,
    @Param('surveyId') surveyId: string,
    @Body() surveyData: SurveyRequestDTO
  ): Promise<SurveyModel> {
    const { name } = surveyData;

    return this.surveyService.create({
      name,
      form: {
        connect: {
          id: formId
        }
      },
      parent: {
        connect: {
          id: surveyId
        }
      }
    });
  }

  @Patch('/:id')
  async updateSurvey(
    @Param('formId') formId: string,
    @Param('id') id: string,
    @Body() surveyData: SurveyRequestDTO
  ): Promise<any> {
    const { name } = surveyData;
    try {
      await this.surveyService.update({
        where: {
          id
        },
        data: {
          name,
          form: {
            connect: {
              id: formId
            }
          }
        }
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Delete('/:id')
  async deleteSurvey(@Param('id') id: string): Promise<SurveyModel> {
    return this.surveyService.delete({ id });
  }
}
