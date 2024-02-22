import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AggressorInputDTO } from '~/form-inputs/dto/aggressor-input.dto';
import { MainFormInputDTO } from '~/form-inputs/dto/main-form-input-input.dto';
import { VictimInputDTO } from '~/form-inputs/dto/victim-input.dto';

export class InputDTO {
  @ValidateNested()
  @Type(() => VictimInputDTO)
  victim: VictimInputDTO;

  @ValidateNested()
  @Type(() => AggressorInputDTO)
  aggressor: AggressorInputDTO;

  @ValidateNested()
  @Type(() => MainFormInputDTO)
  mainForms: MainFormInputDTO;
}
