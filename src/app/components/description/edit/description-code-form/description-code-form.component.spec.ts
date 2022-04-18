import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCodeFormComponent } from './description-code-form.component';

describe('DescriptionCodeFormComponent', () => {
  let component: DescriptionCodeFormComponent;
  let fixture: ComponentFixture<DescriptionCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
