import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieTestComponent } from './lottie-test.component';

describe('LottieTestComponent', () => {
  let component: LottieTestComponent;
  let fixture: ComponentFixture<LottieTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottieTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottieTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
