import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCodeFormComponent } from './carousel-code-form.component';

describe('CarouselCodeFormComponent', () => {
  let component: CarouselCodeFormComponent;
  let fixture: ComponentFixture<CarouselCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
