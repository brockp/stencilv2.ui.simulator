import { TestBed } from '@angular/core/testing';

import { PrimaryButtonService } from './primary-button.service';

describe('PrimaryButtonService', () => {
  let service: PrimaryButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimaryButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
