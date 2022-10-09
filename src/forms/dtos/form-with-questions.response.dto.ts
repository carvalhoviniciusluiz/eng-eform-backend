import { ApiProperty } from '@nestjs/swagger';
import { Form as FormModel, Question as QuestionModel } from '@prisma/client';

type Params = {
  form: FormModel;
  questions: QuestionModel[];
};

export class FormWithQuestionsResponseDto {
  @ApiProperty({
    example: [
      {
        id: '64aedc98-884a-4d31-a535-bf893e60284e',
        content: 'Question',
        updatedAt: '2022-05-25T10:31:43.279Z'
      }
    ]
  })
  questions: any;

  @ApiProperty({
    example: {
      id: 'fa1d2eee-d158-42e8-bb71-4e7c92c27c34',
      name: 'Associate',
      updatedAt: '2022-05-23T12:49:45.655Z'
    }
  })
  form: any;

  constructor(params: Params) {
    const { form, questions } = params;

    this.form = {
      id: form.id,
      name: form.name,
      status: form.status,
      updatedAt: form.updatedAt
    };

    this.questions = questions.map(question => ({
      id: question.id,
      content: question.content,
      updatedAt: question.updatedAt
    }));
  }
}
