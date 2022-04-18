import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonFormComponent } from './primary-button-form.component';

describe('PrimaryButtonFormComponent', () => {
  let component: PrimaryButtonFormComponent;
  let fixture: ComponentFixture<PrimaryButtonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryButtonFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryButtonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
