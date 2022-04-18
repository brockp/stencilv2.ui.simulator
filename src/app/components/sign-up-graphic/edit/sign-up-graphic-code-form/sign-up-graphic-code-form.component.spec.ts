import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpGraphicCodeFormComponent } from './sign-up-graphic-code-form.component';

describe('SignUpGraphicCodeFormComponent', () => {
  let component: SignUpGraphicCodeFormComponent;
  let fixture: ComponentFixture<SignUpGraphicCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpGraphicCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpGraphicCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
