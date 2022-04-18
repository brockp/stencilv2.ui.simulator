import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCodeFormComponent } from './link-code-form.component';

describe('LinkCodeFormComponent', () => {
  let component: LinkCodeFormComponent;
  let fixture: ComponentFixture<LinkCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkCodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
