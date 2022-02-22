import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLottieComponent } from './edit-lottie.component';

describe('EditLottieComponent', () => {
  let component: EditLottieComponent;
  let fixture: ComponentFixture<EditLottieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLottieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
