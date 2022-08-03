import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineThreeSelectorComponent } from './headline-three-selector.component';

describe('HeadlineThreeSelectorComponent', () => {
  let component: HeadlineThreeSelectorComponent;
  let fixture: ComponentFixture<HeadlineThreeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineThreeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineThreeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
