import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimEditorSelectorComponent } from './slim-editor-selector.component';

describe('SlimEditorSelectorComponent', () => {
  let component: SlimEditorSelectorComponent;
  let fixture: ComponentFixture<SlimEditorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlimEditorSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimEditorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
