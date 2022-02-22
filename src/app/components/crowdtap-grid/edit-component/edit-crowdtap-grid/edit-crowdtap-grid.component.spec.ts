import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCrowdtapGridComponent } from './edit-crowdtap-grid.component';

describe('EditCrowdtapGridComponent', () => {
  let component: EditCrowdtapGridComponent;
  let fixture: ComponentFixture<EditCrowdtapGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCrowdtapGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCrowdtapGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
