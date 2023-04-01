import { ApiProperty } from '@nestjs/swagger';
import { QuestionType } from '@prisma/client';
import { IsArray } from 'class-validator';
import { AnswerRequestDTO } from '~/answers/dtos';

export class AnswerRequestCollectionDTO {
  @ApiProperty({
    type: QuestionType,
    description: 'Answers type',
    example: 'objective'
  })
  type: QuestionType;

  @IsArray()
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
