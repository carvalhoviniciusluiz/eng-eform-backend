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
import { Company as CompanyModel } from '@prisma/client';
import { Roles } from '~/common/decorators';
import { RolesGuard } from '~/common/guards';
import { CompaniesService } from '~/companies/companies.service';
import { CompanyPaginateDTO, CompanyRequestDTO } from '~/companies/dtos';
import { CompanyPaginateResponseDto } from '~/companies/dtos/company-paginate.response.dto';

@ApiTags('Companies')
@ApiBearerAuth()
@Roles('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companyService: CompaniesService) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  async getAll(@Query() params: CompanyPaginateDTO): Promise<CompanyPaginateResponseDto> {
    const { page: skip = 0, limit: take = 10, orderBy = { initials: 'asc' }, initials } = params;
    const hasInitials = !!initials;
    const options = hasInitials
      ? {
          where: {
            initials: {
              startsWith: initials
            }
          }
        }
      : {
          skip,
          take,
          orderBy
        };

    try {
      const { companies, count } = await this.companyService.getAll(options);
      return new CompanyPaginateResponseDto(companies, take, skip, count);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get('/:id')
  async getCompany(@Param('id') id: string): Promise<CompanyModel> {
    return this.companyService.getCompany({
      id
    });
  }

  @Post()
  async createCompany(@Body() companyData: CompanyRequestDTO): Promise<CompanyModel> {
    return this.companyService.create(companyData);
  }

  @Patch('/:id')
  async updateCompany(@Param('id') id: string, @Body() companyData: CompanyRequestDTO): Promise<CompanyModel> {
    return this.companyService.update({
      where: {
        id
      },
      data: companyData
    });
  }

  @Delete('/:id')
  async deleteCompany(@Param('id') id: string): Promise<CompanyModel> {
    return this.companyService.delete({ id });
  }
}
