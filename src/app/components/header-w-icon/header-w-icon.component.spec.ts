import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWIconComponent } from './header-w-icon.component';

describe('HeaderWIconComponent', () => {
  let component: HeaderWIconComponent;
  let fixture: ComponentFixture<HeaderWIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
