import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from '~/root/root.controller';
import { RootService } from '~/root/root.service';

describe('RootController', () => {
  let controller: RootController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [RootService]
    }).compile();

    controller = app.get<RootController>(RootController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getHello()).toBe('Hello World!');
    });
  });
});
