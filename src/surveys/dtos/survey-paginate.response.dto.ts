import { ApiProperty } from '@nestjs/swagger';
import { Survey as SurveyModel } from '@prisma/client';
import { PaginatedResultDTO } from '~/common/dtos';

export class SurveyPaginateResponseDto extends PaginatedResultDTO {
  @ApiProperty({
    example: []
  })
  data: any;

  @ApiProperty({
    example: {}
  })
  parent: any;

  constructor(rows: SurveyModel[], count: number, page: number, pageSize: number) {
    super(rows, count, page, pageSize);
    this.data = rows.map(survey => ({
      id: survey.id,
      name: survey.name,
      updatedAt: survey.updatedAt
    }));
  }
}
