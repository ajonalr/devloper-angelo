import { Test, TestingModule } from '@nestjs/testing';
import { PocketbaseController } from './pocketbase.controller';

describe('PocketbaseController', () => {
  let controller: PocketbaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PocketbaseController],
    }).compile();

    controller = module.get<PocketbaseController>(PocketbaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
