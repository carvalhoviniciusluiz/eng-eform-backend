import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthSignUpRequestDTO {
  @Expose()
  @IsEmail()
  @MaxLength(191)
  @ApiProperty({
    type: String,
    description: 'Value for email',
    example: 'carvalho.viniciusluiz@gmail.com'
  })
  email: string;

  @Expose()
  @IsOptional()
  @MaxLength(191)
  @ApiProperty({
    type: String,
    description: 'Value for username',
    example: 'carvalho.viniciusluiz'
  })
  username: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @ApiProperty({
    type: String,
    description: 'Value for password',
    example: '123Ch@nge'
  })
  password: string;
}
