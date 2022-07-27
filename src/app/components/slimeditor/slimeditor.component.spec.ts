import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimeditorComponent } from './slimeditor.component';

describe('SlimeditorComponent', () => {
  let component: SlimeditorComponent;
  let fixture: ComponentFixture<SlimeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlimeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
