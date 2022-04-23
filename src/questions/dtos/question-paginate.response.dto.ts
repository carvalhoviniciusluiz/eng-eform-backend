import { ApiProperty } from '@nestjs/swagger';
import { Question as QuestionModel } from '@prisma/client';
import { PaginatedResultDTO } from '~/common/dtos';

export class QuestionPaginateResponseDto extends PaginatedResultDTO {
  @ApiProperty({
    example: []
  })
  data: any;

  constructor(rows: QuestionModel[], count: number, page: number, pageSize: number) {
    super(rows, count, page, pageSize);
    this.data = rows.map(question => ({
      id: question.id,
      content: question.content,
      updatedAt: question.updatedAt
    }));
  }
}
