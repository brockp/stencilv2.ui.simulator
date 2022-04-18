import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineCodeFormComponent } from './headline-code-form.component';

describe('HeadlineCodeFormComponent', () => {
  let component: HeadlineCodeFormComponent;
  let fixture: ComponentFixture<HeadlineCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
