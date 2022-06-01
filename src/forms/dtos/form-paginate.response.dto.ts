import { ApiProperty } from '@nestjs/swagger';
import { Form as FormModel } from '@prisma/client';
import { PaginatedResultDTO } from '~/common/dtos';

export class FormPaginateResponseDto extends PaginatedResultDTO {
  @ApiProperty({
    example: []
  })
  data: any;

  constructor(rows: FormModel[], count: number, page: number, pageSize: number) {
    super(rows, count, page, pageSize);
    this.data = rows.map(comapany => ({
      id: comapany.id,
      name: comapany.name,
      status: comapany.status,
      updatedAt: comapany.updatedAt
    }));
  }
}
