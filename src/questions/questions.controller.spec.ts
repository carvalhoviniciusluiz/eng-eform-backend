import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import { AppLogger } from '~/app.logger';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { QuestionRequestDTO } from '~/questions/dtos';
import { AnswerTypeEnum } from '~/questions/enums';
import { QuestionsController } from '~/questions/questions.controller';
import { QuestionsService } from '~/questions/questions.service';

// https://github.com/typestack/class-transformer/issues/874#issuecomment-1070896580
jest.mock('class-transformer', () => {
  return {
    ...(jest.requireActual('class-transformer') as any),
    Type: (typeReturn: () => void) => {
      typeReturn();
      return jest.requireActual('class-transformer').Type(typeReturn);
    }
  };
});

const questionMock: QuestionRequestDTO = {
  content: 'content+1',
  answers: {
    type: AnswerTypeEnum.OBJECTIVE,
    data: [
      {
        content: 'content+1'
      },
      {
        content: 'content+2'
      }
    ]
  }
};

describe('QuestionsController', () => {
  let controller: QuestionsController;
  let service: QuestionsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CacheModule.registerAsync({
          useClass: CacheService
        })
      ],
      providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: CacheInterceptor
        },
        {
          provide: AppLogger,
          useValue: {
            setContext: jest.fn(),
            fail: jest.fn()
          }
        },
        QuestionsService,
        PrismaService
      ],
      controllers: [QuestionsController]
    }).compile();
    controller = module.get<QuestionsController>(QuestionsController);
    service = module.get<QuestionsService>(QuestionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 0,
      questions: []
    }));
    const response = await controller.getAll('id', {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(0);
  });

  it('should return not empty list', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      questions: [{}] as any
    }));
    const response = await controller.getAll('id', {});
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should return not empty list filter by email', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
      count: 1,
      questions: [{}] as any
    }));
    const response = await controller.getAll('id', {
      content: faker.random.word()
    });
    expect(response.meta).toBeDefined();
    expect(response.data.length).toBe(1);
  });

  it('should throw badrequest', async () => {
    jest.spyOn(service, 'getAll').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.getAll('id', {});
    await expect(promise).rejects.toThrowError();
  });

  it('should call getQuestion and throw error', async () => {
    jest.spyOn(service, 'getQuestion').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.getQuestion(faker.datatype.uuid());
    await expect(promise).rejects.toThrowError();
  });

  it('should return one record', async () => {
    jest.spyOn(service, 'getQuestion').mockImplementationOnce(
      async () =>
        ({
          answers: [{}]
        } as any)
    );
    const response = await controller.getQuestion(faker.datatype.uuid());

    expect(response.question).not.toBeUndefined();
    expect(response.answers).not.toBeUndefined();
  });

  it('should create and throw error', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.createQuestion('id', questionMock);
    await expect(promise).rejects.toThrowError();
  });

  it('should create new record', async () => {
    jest.spyOn(service, 'create').mockImplementationOnce(
      async () =>
        ({
          answers: [{}]
        } as any)
    );

    const newQuestionMock = {
      ...questionMock,
      answers: {
        ...questionMock.answers,
        type: AnswerTypeEnum.MULTIPLE
      }
    };

    const response = await controller.createQuestion('id', newQuestionMock);

    expect(response.question).not.toBeUndefined();
    expect(response.answers).not.toBeUndefined();
  });

  it('should call update and throw error', async () => {
    jest.spyOn(service, 'update').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.updateQuestion(faker.datatype.uuid(), questionMock);
    await expect(promise).rejects.toThrowError();
  });

  it('should update record', async () => {
    jest.spyOn(service, 'update').mockImplementationOnce(
      async () =>
        ({
          answers: [{}]
        } as any)
    );

    const updatedQuestionMock = {
      ...questionMock,
      answers: {
        ...questionMock.answers,
        type: AnswerTypeEnum.MULTIPLE
      }
    };

    const response = await controller.updateQuestion(faker.datatype.uuid(), updatedQuestionMock);
    expect(response.question).not.toBeUndefined();
    expect(response.answers).not.toBeUndefined();
  });

  it('should delete record', async () => {
    jest.spyOn(service, 'delete').mockImplementationOnce(async () => ({} as any));
    const response = await controller.deleteQuestion(faker.datatype.uuid());
    expect(response).toEqual({});
  });

  it('should call delete and throw error', async () => {
    jest.spyOn(service, 'delete').mockImplementationOnce(async () => {
      throw new Error();
    });
    const promise = controller.deleteQuestion(faker.datatype.uuid());
    await expect(promise).rejects.toThrowError();
  });
});
