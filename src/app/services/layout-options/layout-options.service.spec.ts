import { TestBed } from '@angular/core/testing';

import { LayoutOptionsService } from './layout-options.service';

describe('LayoutOptionsService', () => {
  let service: LayoutOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
