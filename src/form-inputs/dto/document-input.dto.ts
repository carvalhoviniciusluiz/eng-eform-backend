import { IsNotEmpty, IsString } from 'class-validator';

export class DocumentInputDTO {
  @IsNotEmpty()
  @IsString()
  documentType: string;

  @IsNotEmpty()
  @IsString()
  documentNumber: string;

  @IsNotEmpty()
  @IsString()
  id: string;
}
