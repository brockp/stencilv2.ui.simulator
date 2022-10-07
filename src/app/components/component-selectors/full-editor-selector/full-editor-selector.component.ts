import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-full-editor-selector',
  templateUrl: './full-editor-selector.component.html',
  styleUrls: ['./full-editor-selector.component.scss'],
})
export class FullEditorSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  baseAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.baseAdded.emit(this.parent.get('fullEditorSelector')!.value);
  }
}
