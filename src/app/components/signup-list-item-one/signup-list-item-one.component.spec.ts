import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupListItemOneComponent } from './signup-list-item-one.component';

describe('SignupListItemOneComponent', () => {
  let component: SignupListItemOneComponent;
  let fixture: ComponentFixture<SignupListItemOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupListItemOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupListItemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
