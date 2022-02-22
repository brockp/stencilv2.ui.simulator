import { TestBed } from '@angular/core/testing';

import { LottieTestService } from './lottie-test.service';

describe('LottieTestService', () => {
  let service: LottieTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottieTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
