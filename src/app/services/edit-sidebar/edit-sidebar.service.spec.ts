import { TestBed } from '@angular/core/testing';

import { EditSidebarService } from './edit-sidebar.service';

describe('EditSidebarService', () => {
  let service: EditSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
