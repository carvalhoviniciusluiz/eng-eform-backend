import { CacheInterceptor, CacheModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { QuestionType } from '@prisma/client';
import * as faker from 'faker';
import { AppLogger } from '~/app.logger';
import { PrismaService } from '~/common/service';
import { CacheService } from '~/config';
import { FormsService } from '~/forms/forms.service';
import { QuestionRequestDTO } from '~/questions/dtos';
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
  answerType: QuestionType.OBJECTIVE,
  answers: {
    type: QuestionType.OBJECTIVE,
    data: [
      {
        content: 'content+1',
        hasContent: false,
        isDefault: false
      },
      {
        content: 'content+2',
        hasContent: false,
        isDefault: false
      }
    ]
  }
};

describe('QuestionsController', () => {
  let controller: QuestionsController;
  let service: QuestionsService;
  let formsService: FormsService;

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
          provide: PrismaService,
          useValue: jest.fn()
        },
        {
          provide: AppLogger,
          useValue: {
            setContext: jest.fn(),
            fail: jest.fn()
          }
        },
        {
          provide: FormsService,
          useValue: {
            getForm: jest.fn()
          }
        },
        {
          provide: QuestionsService,
          useValue: {
            delete: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            getAll: jest.fn(),
            getQuestion: jest.fn()
          }
        }
      ],
      controllers: [QuestionsController]
    }).compile();
    controller = module.get<QuestionsController>(QuestionsController);
    service = module.get<QuestionsService>(QuestionsService);
    formsService = module.get<FormsService>(FormsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
    expect(formsService).toBeDefined();
  });

  describe('getAll', () => {
    it('should throw badrequest', async () => {
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => {
        throw new Error();
      });
      const promise = controller.getAll('id', {});
      await expect(promise).rejects.toThrowError();
    });

    it('should return empty list', async () => {
      jest.spyOn(formsService, 'getForm').mockImplementationOnce(async () => ({} as any));
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
        count: 0,
        questions: []
      }));
      const response = await controller.getAll('id', {});
      expect(response.meta).toBeDefined();
      expect(response.data.length).toBe(0);
    });

    it('should return not empty list', async () => {
      jest.spyOn(formsService, 'getForm').mockImplementationOnce(async () => ({} as any));
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
        count: 1,
        questions: [{}] as any
      }));
      const response = await controller.getAll('id', {});
      expect(response.meta).toBeDefined();
      expect(response.data.length).toBe(1);
    });

    it('should return not empty list filter by email', async () => {
      jest.spyOn(formsService, 'getForm').mockImplementationOnce(async () => ({} as any));
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
  });

  describe('getChildren', () => {
    it('should return empty child list', async () => {
      jest.spyOn(formsService, 'getForm').mockImplementationOnce(async () => ({} as any));
      jest.spyOn(service, 'getQuestion').mockImplementationOnce(async () => ({} as any));
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
        count: 0,
        questions: []
      }));
      const response = await controller.getChildren(faker.datatype.uuid(), faker.datatype.uuid(), {});
      expect(response.meta).toBeDefined();
      expect(response.data.length).toBe(0);
    });

    it('should return not empty child list', async () => {
      jest.spyOn(formsService, 'getForm').mockImplementationOnce(async () => ({} as any));
      jest.spyOn(service, 'getQuestion').mockImplementationOnce(async () => ({} as any));
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
        count: 1,
        questions: [
          {
            form: {},
            parent: {}
          }
        ] as any
      }));
      const response = await controller.getChildren(faker.datatype.uuid(), faker.datatype.uuid(), {});
      expect(response.meta).toBeDefined();
      expect(response.data.length).toBe(1);
    });

    it('should return not empty child list filter by email', async () => {
      jest.spyOn(formsService, 'getForm').mockImplementationOnce(async () => ({} as any));
      jest.spyOn(service, 'getQuestion').mockImplementationOnce(async () => ({} as any));
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => ({
        count: 1,
        questions: [
          {
            form: {},
            parent: {}
          }
        ] as any
      }));
      const response = await controller.getChildren(faker.datatype.uuid(), faker.datatype.uuid(), {
        content: faker.random.word()
      });
      expect(response.meta).toBeDefined();
      expect(response.data.length).toBe(1);
    });

    it('should throw badrequest to child all list', async () => {
      jest.spyOn(formsService, 'getForm').mockImplementationOnce(async () => ({} as any));
      jest.spyOn(service, 'getAll').mockImplementationOnce(async () => {
        throw new Error();
      });
      const promise = controller.getChildren(faker.datatype.uuid(), faker.datatype.uuid(), {});
      await expect(promise).rejects.toThrowError();
    });
  });

  describe('getQuestion', () => {
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
  });

  describe('createQuestion', () => {
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
          type: QuestionType.MULTIPLE
        }
      };

      const response = await controller.createQuestion('id', newQuestionMock);

      expect(response.question).not.toBeUndefined();
      expect(response.answers).not.toBeUndefined();
    });
  });

  describe('createChild', () => {
    it('should call create to new child and throw error', async () => {
      jest.spyOn(service, 'create').mockImplementationOnce(async () => {
        throw new Error();
      });
      const promise = controller.createChild(faker.datatype.uuid(), faker.datatype.uuid(), {} as any);
      await expect(promise).rejects.toThrowError();
    });

    // it('should create new child record', async () => {
    //   jest.spyOn(service, 'create').mockImplementationOnce(async () => ({} as any));
    //   const response = await controller.createChild(faker.datatype.uuid(), faker.datatype.uuid(), {
    //     answers: {}
    //   } as any);
    //   expect(response).toEqual({
    //     answers: [],
    //     question: {
    //       content: undefined,
    //       id: undefined,
    //       type: undefined,
    //       updatedAt: undefined
    //     }
    //   });
    // });
  });

  describe('updateQuestion', () => {
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
          type: QuestionType.MULTIPLE
        }
      };

      const response = await controller.updateQuestion(faker.datatype.uuid(), updatedQuestionMock);
      expect(response.question).not.toBeUndefined();
      expect(response.answers).not.toBeUndefined();
    });
  });

  describe('deleteQuestion', () => {
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
});
