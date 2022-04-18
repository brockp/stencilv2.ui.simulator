import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineFormComponent } from './headline-form.component';

describe('HeadlineFormComponent', () => {
  let component: HeadlineFormComponent;
  let fixture: ComponentFixture<HeadlineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
