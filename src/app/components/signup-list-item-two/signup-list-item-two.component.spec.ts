import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupListItemTwoComponent } from './signup-list-item-two.component';

describe('SignupListItemTwoComponent', () => {
  let component: SignupListItemTwoComponent;
  let fixture: ComponentFixture<SignupListItemTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupListItemTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupListItemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
