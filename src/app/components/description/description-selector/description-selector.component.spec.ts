import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSelectorComponent } from './description-selector.component';

describe('DescriptionSelectorComponent', () => {
  let component: DescriptionSelectorComponent;
  let fixture: ComponentFixture<DescriptionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
