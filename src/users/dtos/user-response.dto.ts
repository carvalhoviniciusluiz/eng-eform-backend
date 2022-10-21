import { ApiProperty } from '@nestjs/swagger';
import { UserData } from '~/users/types';

export class UserResponseDto {
  @ApiProperty({
    example: []
  })
  data: any;

  constructor(row: UserData) {
    this.data = {
      id: row.id,
      role: row.role,
      email: row.email,
      updatedAt: row.updatedAt,
      company: {
        id: row.company.id,
        initials: row.company.initials,
        name: row.company.name,
        updatedAt: row.company.updatedAt
      }
    };
  }
}
