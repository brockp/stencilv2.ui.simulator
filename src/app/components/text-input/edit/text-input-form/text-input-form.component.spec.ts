import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputFormComponent } from './text-input-form.component';

describe('TextInputFormComponent', () => {
  let component: TextInputFormComponent;
  let fixture: ComponentFixture<TextInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
