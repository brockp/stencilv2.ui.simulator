import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheaderSelectorComponent } from './appheader-selector.component';

describe('AppheaderSelectorComponent', () => {
  let component: AppheaderSelectorComponent;
  let fixture: ComponentFixture<AppheaderSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppheaderSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheaderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
