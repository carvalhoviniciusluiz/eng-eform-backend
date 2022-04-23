import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { transformToNumber, transformToObject } from '~/common/utils';

export class SurveyPaginateDTO {
  @Expose()
  @IsOptional()
  @IsNumber()
  @Transform(transformToNumber)
  @ApiPropertyOptional({
    type: Number,
    description: 'Value for page.',
    example: 1
  })
  page?: number;

  @Expose()
  @IsOptional()
  @IsNumber()
  @Transform(transformToNumber)
  @ApiPropertyOptional({
    type: Number,
    description: 'Value for page limit',
    example: 100
  })
  limit?: number;

  @Expose()
  @IsOptional()
  @IsObject()
  @Transform(transformToObject)
  @ApiPropertyOptional({
    type: String,
    description: 'Value for order values',
    example: 'name.asc',
    default: 'name.asc'
  })
  orderBy?: object;

  @Expose()
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    type: String,
    description: 'Value for name filter.',
    example: 'xpto'
  })
  name?: string;
}
