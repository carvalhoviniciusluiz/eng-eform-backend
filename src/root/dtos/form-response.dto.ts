import { ApiProperty } from '@nestjs/swagger';
import { FormStatus } from '@prisma/client';
import { Expose } from 'class-transformer';
import { SurveyResponseDTO } from '~/root/dtos/survey-response.dto';

export class FormResponseDTO {
  @Expose()
  @ApiProperty({
    type: String,
    description: 'Value for id',
    example: '90f7b145-ed13-4bc7-8c4e-c996d79b6017'
  })
  id: string;

  @Expose()
  @ApiProperty({
    type: String,
    description: 'Value for name',
    example: 'convergence Managed'
  })
  name: string;

  @Expose()
  @ApiProperty({
    type: Date,
    description: 'Value for updated at',
    example: '2022-05-30T14:50:13.410Z'
  })
  updatedAt: Date;

  @Expose()
  @ApiProperty({
    type: FormStatus,
    description: 'Value for form status',
    example: 'DRAFT'
  })
  status: FormStatus;

  surveys: SurveyResponseDTO[];

  parseAnswers(answers: any[]): any {
    return answers?.map((answer: any) => ({
      id: answer.id,
      content: answer.content,
      updatedAt: answer.updatedAt
    }));
  }

  parseQuestions(questions: any[]): any {
    return questions?.map((question: any) => ({
      id: question.id,
      content: question.content,
      type: question.type,
      updatedAt: question.updatedAt,
      answers: !!question?.answers?.length ? this.parseAnswers(question.answers) : undefined
    }));
  }

  parseSurvey(surveys: any[]): any {
    return surveys?.map((survey: any) => ({
      id: survey.id,
      name: survey.name,
      updatedAt: survey.updatedAt,
      surveys: !!survey?.children?.length ? this.parseSurvey(survey.children) : undefined,
      questions: !!survey?.questions?.length ? this.parseQuestions(survey.questions) : undefined
    }));
  }

  constructor(form: any) {
    this.id = form.id;
    this.name = form.name;
    this.updatedAt = form.updatedAt;
    this.status = form.status;

    this.surveys = this.parseSurvey(form.surveys);
  }
}
