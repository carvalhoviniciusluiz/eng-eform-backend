import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { MaxLength } from 'class-validator';

export class AnswerRequestDTO {
  @Expose()
  @MaxLength(191)
  @ApiProperty({
    type: String,
    description: 'Value for content',
    example: 'Apple Inc.'
  })
  content: string;
}
