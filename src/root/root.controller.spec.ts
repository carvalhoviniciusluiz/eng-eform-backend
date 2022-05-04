import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from '~/root/root.controller';

describe('RootController', () => {
  let controller: RootController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootController]
    }).compile();

    controller = app.get<RootController>(RootController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
