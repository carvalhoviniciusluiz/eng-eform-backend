import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ArrayMinSize, IsArray, IsEnum } from 'class-validator';
import { AnswerRequestDTO } from '~/answers/dtos';
import { AnswerTypeEnum } from '~/questions/enums';

export class AnswerRequestCollectionDTO {
  @Expose()
  @IsEnum(AnswerTypeEnum)
  @ApiProperty({
    type: AnswerTypeEnum,
    description: 'Answers type',
    example: 'objective'
  })
  type: AnswerTypeEnum;

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
