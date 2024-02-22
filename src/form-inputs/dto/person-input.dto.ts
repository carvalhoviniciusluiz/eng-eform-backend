import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class PersonInputDTO {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  socialName: string;

  @IsNotEmpty()
  @IsDateString()
  birthDate: string;
}
