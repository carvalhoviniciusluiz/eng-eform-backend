import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, MaxLength } from 'class-validator';

export class UserRequestDTO {
  @Expose()
  @IsEmail()
  @MaxLength(191)
  @ApiProperty({
    type: String,
    description: 'Value for email',
    example: 'carvalho.viniciusluiz@gmail.com'
  })
  email: string;
}
