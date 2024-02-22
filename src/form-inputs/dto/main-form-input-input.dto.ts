import { QuestionsInputDTO } from '~/form-inputs/dto/questions-input.dto';

export class MainFormInputDTO {
  [mainFormId: string]: QuestionsInputDTO;
}
