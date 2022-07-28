import { TestBed } from '@angular/core/testing';

import { SpacerService } from './spacer.service';

describe('SpacerService', () => {
  let service: SpacerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
