import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitleBarSelectorComponent } from './header-title-bar-selector.component';

describe('HeaderTitleBarSelectorComponent', () => {
  let component: HeaderTitleBarSelectorComponent;
  let fixture: ComponentFixture<HeaderTitleBarSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTitleBarSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTitleBarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
