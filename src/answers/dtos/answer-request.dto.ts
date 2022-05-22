import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { MaxLength } from 'class-validator';

export class AnswerRequestDTO {
  @Expose()
  @ApiPropertyOptional({
    type: String,
    description: 'Value for answer id',
    example: 'bc7850b2-bd45-422c-9e06-76cc0fa9f9b5'
  })
  id?: string;

  @Expose()
  @MaxLength(191)
  @ApiProperty({
    type: String,
    description: 'Value for content',
    example: 'Apple Inc.'
  })
  content: string;
}
