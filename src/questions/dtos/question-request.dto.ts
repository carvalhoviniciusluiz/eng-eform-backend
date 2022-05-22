import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ArrayMinSize, IsArray, MaxLength } from 'class-validator';
import { AnswerRequestDTO } from '~/answers/dtos';

export class QuestionRequestDTO {
  @Expose()
  @MaxLength(191)
  @ApiProperty({
    type: String,
    description: 'Value for content',
    example: 'Apple Inc.'
  })
  content: string;

  @Expose()
  @IsArray()
  @ArrayMinSize(2)
  @ApiProperty({
    type: String,
    description: 'Answer list, min 2 items',
    example: [
      {
        content: 'content+1'
      }
    ]
  })
  answers: AnswerRequestDTO[];
}
