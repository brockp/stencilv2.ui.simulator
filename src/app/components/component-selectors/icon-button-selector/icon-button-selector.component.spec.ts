import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonSelectorComponent } from './icon-button-selector.component';

describe('IconButtonSelectorComponent', () => {
  let component: IconButtonSelectorComponent;
  let fixture: ComponentFixture<IconButtonSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconButtonSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
