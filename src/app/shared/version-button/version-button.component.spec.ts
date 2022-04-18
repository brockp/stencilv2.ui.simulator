import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionButtonComponent } from './version-button.component';

describe('VersionButtonComponent', () => {
  let component: VersionButtonComponent;
  let fixture: ComponentFixture<VersionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
