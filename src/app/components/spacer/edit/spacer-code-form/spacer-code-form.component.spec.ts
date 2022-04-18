import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerCodeFormComponent } from './spacer-code-form.component';

describe('SpacerCodeFormComponent', () => {
  let component: SpacerCodeFormComponent;
  let fixture: ComponentFixture<SpacerCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacerCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
