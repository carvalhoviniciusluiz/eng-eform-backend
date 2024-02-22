import { IsNotEmpty, IsString } from 'class-validator';

export class AddressInputDTO {
  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  neighborhoodComplement: string;

  @IsNotEmpty()
  @IsString()
  zipCode: string;

  @IsNotEmpty()
  @IsString()
  ddd: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  county: string;

  @IsNotEmpty()
  @IsString()
  publicPlace: string;

  @IsNotEmpty()
  @IsString()
  id: string;
}
