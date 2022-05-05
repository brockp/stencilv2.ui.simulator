import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputSelectorComponent } from './text-input-selector.component';

describe('TextInputSelectorComponent', () => {
  let component: TextInputSelectorComponent;
  let fixture: ComponentFixture<TextInputSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
