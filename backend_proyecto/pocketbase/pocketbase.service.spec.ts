import { Test, TestingModule } from '@nestjs/testing';
import { PocketbaseService } from './pocketbase.service';

describe('PocketbaseService', () => {
  let service: PocketbaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PocketbaseService],
    }).compile();

    service = module.get<PocketbaseService>(PocketbaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
