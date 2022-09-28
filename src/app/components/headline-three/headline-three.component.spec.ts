import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineThreeComponent } from './headline-three.component';

describe('HeadlineThreeComponent', () => {
  let component: HeadlineThreeComponent;
  let fixture: ComponentFixture<HeadlineThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
