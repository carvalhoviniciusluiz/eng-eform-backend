import { ApiProperty } from '@nestjs/swagger';
import { QuestionType } from '@prisma/client';
import { Expose } from 'class-transformer';
import { ArrayMinSize, IsArray, IsEnum } from 'class-validator';
import { AnswerRequestDTO } from '~/answers/dtos';

export class AnswerRequestCollectionDTO {
  @Expose()
  @IsEnum(QuestionType)
  @ApiProperty({
    type: QuestionType,
    description: 'Answers type',
    example: 'objective'
  })
  type: QuestionType;

  @Expose()
  @IsArray()
  @ArrayMinSize(2)
  @ApiProperty({
    type: AnswerRequestDTO,
    description: 'Answers list',
    example: [
      {
        content: 'content+1'
      },
      {
        content: 'content+2'
      },
      {
        content: 'content+3'
      }
    ]
  })
  data: AnswerRequestDTO[];
}
