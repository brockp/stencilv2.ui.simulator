import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonSelectorComponent } from './primary-button-selector.component';

describe('PrimaryButtonSelectorComponent', () => {
  let component: PrimaryButtonSelectorComponent;
  let fixture: ComponentFixture<PrimaryButtonSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryButtonSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryButtonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
