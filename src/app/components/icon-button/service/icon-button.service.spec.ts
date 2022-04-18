import { TestBed } from '@angular/core/testing';

import { IconButtonService } from './icon-button.service';

describe('IconButtonService', () => {
  let service: IconButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
