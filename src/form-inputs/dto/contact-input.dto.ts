import { IsNotEmpty, IsString } from 'class-validator';

export class ContactInputDTO {
  @IsNotEmpty()
  @IsString()
  contactType: string;

  @IsNotEmpty()
  @IsString()
  contact: string;

  @IsNotEmpty()
  @IsString()
  id: string;
}
