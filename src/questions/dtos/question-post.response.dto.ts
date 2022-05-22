import { ApiProperty } from '@nestjs/swagger';
import { Answer as AnswerModel, Question as QuestionModel } from '@prisma/client';

export class QuestionPostResponseDto {
  @ApiProperty({
    example: {
      id: '269b8a8e-d8a7-4fe4-aa62-fd920b0246f7',
      content: 'content+3',
      updatedAt: '2022-05-22T03:26:10.328Z'
    }
  })
  question: any;

  @ApiProperty({
    example: [
      {
        id: 'ef8d7d4f-7773-4965-bb87-ac0b3d711b3f',
        content: 'content+1',
        updatedAt: '2022-05-22T03:26:10.328Z'
      },
      {
        id: 'bc7850b2-bd45-422c-9e06-76cc0fa9f9b5',
        content: 'content+2',
        updatedAt: '2022-05-22T03:26:10.328Z'
      },
      {
        id: 'a43cd6ec-18d2-4bea-9a9f-f797485006a8',
        content: 'content+3',
        updatedAt: '2022-05-22T03:26:10.328Z'
      }
    ]
  })
  answers: any;

  constructor(question: QuestionModel) {
    this.question = {
      id: question.id,
      content: question.content,
      updatedAt: question.updatedAt
    };

    const answers = (<any>question).answers as AnswerModel[];

    this.answers = answers.map(answer => ({
      id: answer.id,
      content: answer.content,
      updatedAt: answer.updatedAt
    }));
  }
}
