import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonFormComponent } from './icon-button-form.component';

describe('IconButtonFormComponent', () => {
  let component: IconButtonFormComponent;
  let fixture: ComponentFixture<IconButtonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconButtonFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
