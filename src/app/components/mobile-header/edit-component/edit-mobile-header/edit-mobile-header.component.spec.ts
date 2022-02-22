import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMobileHeaderComponent } from './edit-mobile-header.component';

describe('EditMobileHeaderComponent', () => {
  let component: EditMobileHeaderComponent;
  let fixture: ComponentFixture<EditMobileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMobileHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMobileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
