import { Test, TestingModule } from '@nestjs/testing';
import { LikepostService } from './likepost.service';

describe('LikepostService', () => {
  let service: LikepostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikepostService],
    }).compile();

    service = module.get<LikepostService>(LikepostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
