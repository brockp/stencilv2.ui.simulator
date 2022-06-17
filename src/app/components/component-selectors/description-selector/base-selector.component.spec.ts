import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSelectorTwoComponent } from './base-selector.component';

describe('BaseSelectorTwoComponent', () => {
  let component: BaseSelectorTwoComponent;
  let fixture: ComponentFixture<BaseSelectorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseSelectorTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSelectorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
