import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimentryComponent } from './slimentry.component';

describe('SlimentryComponent', () => {
  let component: SlimentryComponent;
  let fixture: ComponentFixture<SlimentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlimentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
