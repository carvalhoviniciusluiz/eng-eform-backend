import { ApiProperty } from '@nestjs/swagger';
import { Answer as AnswerModel, Question as QuestionModel } from '@prisma/client';

export class QuestionResponseDto {
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

  @ApiProperty({
    example: [
      {
        id: 'f4a80ba0-a82f-4b0a-8a31-7d569bf68385',
        content: 'question+1',
        type: 'OBJECTIVE',
        updatedAt: '2022-10-09T01:52:20.612Z',
        answers: [
          {
            id: 'e5d4983f-892e-477e-96db-172556e6a1a3',
            content: 'content+1',
            updatedAt: '2022-10-09T01:52:20.612Z'
          }
        ]
      }
    ]
  })
  children: any;

  parseAnswers(answers: any[]): any {
    return answers?.map((answer: any) => ({
      id: answer.id,
      content: answer.content,
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

  constructor(question: QuestionModel) {
    this.question = {
      id: question.id,
      type: question.type,
      content: question.content,
      updatedAt: question.updatedAt
    };

    const answers = (<any>question).answers as AnswerModel[];
    const children = (<any>question).children as QuestionModel[];

    this.answers = this.parseAnswers(answers);
    this.children = this.parseQuestions(children);
  }
}
