import { ApiProperty } from '@nestjs/swagger';
import { Answer as AnswerModel } from '@prisma/client';
import { PaginatedResultDTO } from '~/common/dtos';

export class AnswerPaginateResponseDto extends PaginatedResultDTO {
  @ApiProperty({
    example: []
  })
  data: any;

  constructor(rows: AnswerModel[], count: number, page: number, pageSize: number) {
    super(rows, count, page, pageSize);
    this.data = rows.map(question => ({
      id: question.id,
      content: question.content,
      updatedAt: question.updatedAt
    }));
  }
}
