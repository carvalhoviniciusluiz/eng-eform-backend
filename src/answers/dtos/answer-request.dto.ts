import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsBoolean, IsOptional, MaxLength } from 'class-validator';
import { transformToBoolean } from '~/common/utils';

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

  @IsOptional()
  @IsBoolean()
  @Transform(transformToBoolean)
  @ApiPropertyOptional({
    type: String,
    description: 'For includes content.',
    example: true
  })
  hasContent: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(transformToBoolean)
  @ApiPropertyOptional({
    type: String,
    description: 'If is answer default.',
    example: true
  })
  isDefault: boolean;
}
