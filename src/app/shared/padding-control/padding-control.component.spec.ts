import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddingControlComponent } from './padding-control.component';

describe('PaddingControlComponent', () => {
  let component: PaddingControlComponent;
  let fixture: ComponentFixture<PaddingControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaddingControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
