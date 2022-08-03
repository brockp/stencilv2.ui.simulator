import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineTwoSelectorComponent } from './headline-two-selector.component';

describe('HeadlineTwoSelectorComponent', () => {
  let component: HeadlineTwoSelectorComponent;
  let fixture: ComponentFixture<HeadlineTwoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineTwoSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineTwoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
