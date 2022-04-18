import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerFormComponent } from './spacer-form.component';

describe('SpacerFormComponent', () => {
  let component: SpacerFormComponent;
  let fixture: ComponentFixture<SpacerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
