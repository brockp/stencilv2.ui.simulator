import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSlideThreeComponent } from './edit-slide-three.component';

describe('EditSlideThreeComponent', () => {
  let component: EditSlideThreeComponent;
  let fixture: ComponentFixture<EditSlideThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSlideThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSlideThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
