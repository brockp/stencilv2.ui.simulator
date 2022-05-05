import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerSelectorComponent } from './spacer-selector.component';

describe('SpacerSelectorComponent', () => {
  let component: SpacerSelectorComponent;
  let fixture: ComponentFixture<SpacerSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacerSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
