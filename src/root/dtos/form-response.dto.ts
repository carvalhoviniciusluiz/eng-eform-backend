import { ApiProperty } from '@nestjs/swagger';

export class FormResponseDTO {
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

  parseAnswers(answers: any[]): any {
    return answers?.map((answer: any) => ({
      id: answer.id,
      content: answer.content,
      hasContent: answer.hasContent,
      isDefault: answer.isDefault,
      updatedAt: answer.updatedAt
    }));
  }

  parseQuestions(questions: any[]): any {
    return questions?.map((question: any) => {
      return {
        id: question.id,
        content: question.content,
        type: question.type,
        updatedAt: question.updatedAt,
        answers: !!question?.answers?.length ? this.parseAnswers(question.answers) : undefined,
        children: !!question?.children?.length ? this.parseQuestions(question.children) : undefined
      };
    });
  }

  constructor(form: any) {
    this.form = {
      id: form.id,
      name: form.name,
      status: form.status,
      updatedAt: form.updatedAt
    };

    this.questions = this.parseQuestions(form.questions);
  }
}
