import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { transformToBoolean } from '~/common/utils';

export class FormQueryDTO {
  @IsOptional()
  @IsBoolean()
  @Transform(transformToBoolean)
  @ApiPropertyOptional({
    type: String,
    description: 'Show questions.',
    example: true
  })
  questionsShow?: boolean;
}
