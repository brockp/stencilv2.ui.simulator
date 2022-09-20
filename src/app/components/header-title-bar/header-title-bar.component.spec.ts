import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitleBarComponent } from './header-title-bar.component';

describe('HeaderTitleBarComponent', () => {
  let component: HeaderTitleBarComponent;
  let fixture: ComponentFixture<HeaderTitleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTitleBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
