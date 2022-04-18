import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpGraphicFormComponent } from './sign-up-graphic-form.component';

describe('SignUpGraphicFormComponent', () => {
  let component: SignUpGraphicFormComponent;
  let fixture: ComponentFixture<SignUpGraphicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpGraphicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpGraphicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
