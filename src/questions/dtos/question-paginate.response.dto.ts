import { ApiProperty } from '@nestjs/swagger';
import { Form as FormModel, Question as QuestionModel } from '@prisma/client';
import { PaginatedResultDTO } from '~/common/dtos';
import { QuestionDataResponse } from '~/questions/types';

type Params = {
  form: FormModel;
  parent?: QuestionModel;
  rows: QuestionDataResponse[];
  count: number;
  page: number;
  pageSize: number;
};

export class QuestionPaginateResponseDto extends PaginatedResultDTO {
  @ApiProperty({
    example: [
      {
        id: '64aedc98-884a-4d31-a535-bf893e60284e',
        content: 'Main question',
        updatedAt: '2022-05-25T10:31:43.279Z'
      }
    ]
  })
  data: any;

  @ApiProperty({
    example: {
      id: 'fa1d2eee-d158-42e8-bb71-4e7c92c27c34',
      name: 'Associate',
      updatedAt: '2022-05-23T12:49:45.655Z'
    }
  })
  form: any;

  @ApiProperty({
    example: {
      id: '96dba2ad-2f1e-4383-b7a8-b54bbcf94016',
      content: 'Question Parent',
      updatedAt: '2022-05-23T15:29:55.423Z'
    }
  })
  parent: any;

  constructor(params: Params) {
    const { count, form, page, pageSize, parent, rows } = params;

    super(rows, count, page, pageSize);

    this.form = {
      id: form.id,
      name: form.name,
      status: form.status,
      updatedAt: form.updatedAt
    };

    const hasParent = !!parent;
    if (hasParent) {
      this.parent = {
        id: parent.id,
        content: parent.content,
        updatedAt: parent.updatedAt
      };
    }

    this.data = rows.map(question => ({
      id: question.id,
      content: question.content,
      updatedAt: question.updatedAt
    }));
  }
}
