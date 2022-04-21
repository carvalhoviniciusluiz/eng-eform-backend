import { ApiProperty } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { PaginatedResultDTO } from '~/common/dtos';

export class UserPaginateResponseDto extends PaginatedResultDTO {
  @ApiProperty({
    example: []
  })
  data: any;

  constructor(rows: UserModel[], count: number, page: number, pageSize: number) {
    super(rows, count, page, pageSize);
    this.data = rows.map(user => ({
      id: user.id,
      email: user.email,
      updatedAt: user.updatedAt
    }));
  }
}
