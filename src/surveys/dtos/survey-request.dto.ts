import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { MaxLength } from 'class-validator';

export class SurveyRequestDTO {
  @Expose()
  @MaxLength(191)
  @ApiProperty({
    type: String,
    description: 'Value for name',
    example: 'Apple Inc.'
  })
  name: string;
}
