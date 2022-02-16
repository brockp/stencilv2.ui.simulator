import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSlideTwoComponent } from './edit-slide-two.component';

describe('EditSlideTwoComponent', () => {
  let component: EditSlideTwoComponent;
  let fixture: ComponentFixture<EditSlideTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSlideTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSlideTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
