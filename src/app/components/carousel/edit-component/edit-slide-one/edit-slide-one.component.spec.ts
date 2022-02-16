import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSlideOneComponent } from './edit-slide-one.component';

describe('EditSlideOneComponent', () => {
  let component: EditSlideOneComponent;
  let fixture: ComponentFixture<EditSlideOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSlideOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSlideOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
