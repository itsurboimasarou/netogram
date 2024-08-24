import { Test, TestingModule } from '@nestjs/testing';
import { LikepostController } from './likepost.controller';
import { LikepostService } from './likepost.service';

describe('LikepostController', () => {
  let controller: LikepostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikepostController],
      providers: [LikepostService],
    }).compile();

    controller = module.get<LikepostController>(LikepostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
