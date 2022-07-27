import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slim-editor-selector',
  templateUrl: './slim-editor-selector.component.html',
  styleUrls: ['./slim-editor-selector.component.scss'],
})
export class SlimEditorSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  slimEditorAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.slimEditorAdded.emit(this.parent.get('slimEditorSelector')!.value);
  }
}
