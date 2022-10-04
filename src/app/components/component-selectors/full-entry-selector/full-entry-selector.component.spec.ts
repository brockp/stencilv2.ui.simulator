import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullEntrySelectorComponent } from './full-entry-selector.component';

describe('FullEntrySelectorComponent', () => {
  let component: FullEntrySelectorComponent;
  let fixture: ComponentFixture<FullEntrySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullEntrySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullEntrySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
