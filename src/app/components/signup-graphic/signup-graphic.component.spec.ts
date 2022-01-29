import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGraphicComponent } from './signup-graphic.component';

describe('SignupGraphicComponent', () => {
  let component: SignupGraphicComponent;
  let fixture: ComponentFixture<SignupGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
