import { ApiPropertyOptional } from '@nestjs/swagger';
import { FormSegment } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsOptional, MaxLength } from 'class-validator';

export class FormRequestDTO {
  @Expose()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: 'Value for segment',
    example: 'Public'
  })
  segment?: FormSegment;

  @Expose()
  @IsOptional()
  @MaxLength(191)
  @ApiPropertyOptional({
    type: String,
    description: 'Value for name',
    example: 'Apple Inc.'
  })
  name?: string;
}
