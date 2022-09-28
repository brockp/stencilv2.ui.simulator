import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineTwoComponent } from './headline-two.component';

describe('HeadlineTwoComponent', () => {
  let component: HeadlineTwoComponent;
  let fixture: ComponentFixture<HeadlineTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
