import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineWIconSelectorComponent } from './headline-w-icon-selector.component';

describe('HeadlineWIconSelectorComponent', () => {
  let component: HeadlineWIconSelectorComponent;
  let fixture: ComponentFixture<HeadlineWIconSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineWIconSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineWIconSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
