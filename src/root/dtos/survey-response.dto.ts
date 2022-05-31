import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { QuestionResponseDTO } from '~/root/dtos';

export class SurveyResponseDTO {
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
    description: 'Value for name',
    example: 'convergence Managed'
  })
  name: string;

  @Expose()
  @ApiProperty({
    type: Date,
    description: 'Value for updated at',
    example: '2022-05-30T14:50:13.410Z'
  })
  updatedAt: Date;

  questions: QuestionResponseDTO[];

  surveys: SurveyResponseDTO[];
}
