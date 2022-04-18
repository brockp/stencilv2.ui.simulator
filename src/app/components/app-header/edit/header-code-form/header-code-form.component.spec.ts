import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCodeFormComponent } from './header-code-form.component';

describe('HeaderCodeFormComponent', () => {
  let component: HeaderCodeFormComponent;
  let fixture: ComponentFixture<HeaderCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
