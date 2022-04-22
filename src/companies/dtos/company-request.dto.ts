import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, MaxLength } from 'class-validator';

export class CompanyRequestDTO {
  @Expose()
  @IsOptional()
  @MaxLength(191)
  @ApiPropertyOptional({
    type: String,
    description: 'Value for name',
    example: 'Apple Inc.'
  })
  name?: string;

  @Expose()
  @MaxLength(100)
  @ApiProperty({
    type: String,
    description: 'Value for initials',
    example: 'apple'
  })
  initials: string;
}
