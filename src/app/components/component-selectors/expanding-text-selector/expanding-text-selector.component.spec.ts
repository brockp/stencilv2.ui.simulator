import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingTextSelectorComponent } from './expanding-text-selector.component';

describe('ExpandingTextSelectorComponent', () => {
  let component: ExpandingTextSelectorComponent;
  let fixture: ComponentFixture<ExpandingTextSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandingTextSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandingTextSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
