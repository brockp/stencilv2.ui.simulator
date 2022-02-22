import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdtapGridComponent } from './crowdtap-grid.component';

describe('CrowdtapGridComponent', () => {
  let component: CrowdtapGridComponent;
  let fixture: ComponentFixture<CrowdtapGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdtapGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdtapGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
