import { ApiProperty } from '@nestjs/swagger';
import { QuestionType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class QuestionResponseDTO {
  @Expose()
  @ApiProperty({
    type: String,
    description: 'Value for id',
    example: '90f7b145-ed13-4bc7-8c4e-c996d79b6017'
  })
  id: string;

  @Expose()
  @ApiProperty({
    type: String,
    description: 'Value for content',
    example: 'convergence Managed'
  })
  content: string;

  @Expose()
  @ApiProperty({
    type: Date,
    description: 'Value for question type',
    example: 'OBJECTIVE'
  })
  type: QuestionType;

  @Expose()
  @ApiProperty({
    type: Date,
    description: 'Value for updated at',
    example: '2022-05-30T14:50:13.410Z'
  })
  updatedAt: Date;
}
