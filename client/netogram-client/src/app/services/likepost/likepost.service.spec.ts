import { TestBed } from '@angular/core/testing';

import { LikepostService } from './likepost.service';

describe('LikepostService', () => {
  let service: LikepostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikepostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
