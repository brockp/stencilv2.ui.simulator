import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputCodeFormComponent } from './text-input-code-form.component';

describe('TextInputCodeFormComponent', () => {
  let component: TextInputCodeFormComponent;
  let fixture: ComponentFixture<TextInputCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
