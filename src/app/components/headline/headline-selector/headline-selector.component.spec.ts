import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineSelectorComponent } from './headline-selector.component';

describe('HeadlineSelectorComponent', () => {
  let component: HeadlineSelectorComponent;
  let fixture: ComponentFixture<HeadlineSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
