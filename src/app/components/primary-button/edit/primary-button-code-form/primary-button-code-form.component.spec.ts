import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonCodeFormComponent } from './primary-button-code-form.component';

describe('PrimaryButtonCodeFormComponent', () => {
  let component: PrimaryButtonCodeFormComponent;
  let fixture: ComponentFixture<PrimaryButtonCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryButtonCodeFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryButtonCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
