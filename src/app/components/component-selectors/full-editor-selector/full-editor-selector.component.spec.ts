import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullEditorSelectorComponent } from './full-editor-selector.component';

describe('FullEditorSelectorComponent', () => {
  let component: FullEditorSelectorComponent;
  let fixture: ComponentFixture<FullEditorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullEditorSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullEditorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
