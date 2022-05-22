import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { MaxLength, ValidateNested } from 'class-validator';
import { AnswerRequestCollectionDTO } from '~/questions/dtos/question-request-collection.dto';

export class QuestionRequestDTO {
  @Expose()
  @MaxLength(191)
  @ApiProperty({
    type: String,
    description: 'Value for content',
    example: 'Apple Inc.'
  })
  content: string;

  @ValidateNested()
  @Type(() => AnswerRequestCollectionDTO)
  answers: AnswerRequestCollectionDTO;
}
