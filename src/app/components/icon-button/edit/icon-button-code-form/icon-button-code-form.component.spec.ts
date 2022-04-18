import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonCodeFormComponent } from './icon-button-code-form.component';

describe('IconButtonCodeFormComponent', () => {
  let component: IconButtonCodeFormComponent;
  let fixture: ComponentFixture<IconButtonCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconButtonCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
