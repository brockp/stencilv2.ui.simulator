import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphCodeFormComponent } from './paragraph-code-form.component';

describe('ParagraphCodeFormComponent', () => {
  let component: ParagraphCodeFormComponent;
  let fixture: ComponentFixture<ParagraphCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
