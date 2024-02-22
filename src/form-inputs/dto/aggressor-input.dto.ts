import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AddressInputDTO } from '~/form-inputs/dto/addreess-input.dto';
import { ContactInputDTO } from '~/form-inputs/dto/contact-input.dto';
import { DocumentInputDTO } from '~/form-inputs/dto/document-input.dto';
import { PersonInputDTO } from '~/form-inputs/dto/person-input.dto';

export class AggressorInputDTO {
  @ValidateNested()
  @Type(() => PersonInputDTO)
  person: PersonInputDTO;

  @ValidateNested({ each: true })
  @Type(() => AddressInputDTO)
  addresses: AddressInputDTO[];

  @ValidateNested({ each: true })
  @Type(() => ContactInputDTO)
  contacts: ContactInputDTO[];

  @ValidateNested({ each: true })
  @Type(() => DocumentInputDTO)
  documents: DocumentInputDTO[];
}
