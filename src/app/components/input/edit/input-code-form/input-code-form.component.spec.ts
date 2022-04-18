import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCodeFormComponent } from './input-code-form.component';

describe('InputCodeFormComponent', () => {
  let component: InputCodeFormComponent;
  let fixture: ComponentFixture<InputCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
