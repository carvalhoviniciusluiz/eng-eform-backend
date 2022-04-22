import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, MaxLength } from 'class-validator';

export class FormRequestDTO {
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
