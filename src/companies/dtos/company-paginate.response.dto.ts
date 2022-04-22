import { ApiProperty } from '@nestjs/swagger';
import { Company as CompanyModel } from '@prisma/client';
import { PaginatedResultDTO } from '~/common/dtos';

export class CompanyPaginateResponseDto extends PaginatedResultDTO {
  @ApiProperty({
    example: []
  })
  data: any;

  constructor(rows: CompanyModel[], count: number, page: number, pageSize: number) {
    super(rows, count, page, pageSize);
    this.data = rows.map(comapany => ({
      id: comapany.id,
      name: comapany.name,
      initials: comapany.initials,
      updatedAt: comapany.updatedAt
    }));
  }
}
