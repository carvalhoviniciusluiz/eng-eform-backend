import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResultDTO } from '~/common/dtos';
import { SurveyDataResponse } from '~/surveys/types';

export class SurveyPaginateResponseDto extends PaginatedResultDTO {
  @ApiProperty({
    example: [
      {
        id: '64aedc98-884a-4d31-a535-bf893e60284e',
        name: 'form+1',
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
      name: 'Survey 01',
      updatedAt: '2022-05-23T15:29:55.423Z'
    }
  })
  parent: any;

  constructor(rows: SurveyDataResponse[], count: number, page: number, pageSize: number) {
    super(rows, count, page, pageSize);

    const [row] = rows;

    const form = row?.form;
    const hasForm = !!form;
    if (hasForm) {
      this.form = form;
    }

    const parent = row?.parent;
    const hasParent = !!parent;
    if (hasParent) {
      this.parent = parent;
    }

    this.data = rows.map(survey => ({
      id: survey.id,
      name: survey.name,
      updatedAt: survey.updatedAt
    }));
  }
}
