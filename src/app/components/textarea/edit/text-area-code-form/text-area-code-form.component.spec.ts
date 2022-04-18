import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaCodeFormComponent } from './text-area-code-form.component';

describe('TextAreaCodeFormComponent', () => {
  let component: TextAreaCodeFormComponent;
  let fixture: ComponentFixture<TextAreaCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreaCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
