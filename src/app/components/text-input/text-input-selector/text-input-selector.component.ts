import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input-selector',
  templateUrl: './text-input-selector.component.html',
  styleUrls: ['./text-input-selector.component.scss'],
})
export class TextInputSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  slimEntries!: any[];

  @Output()
  slimEntryAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.slimEntryAdded.emit(this.parent.get('slimEntrySelector')!.value);
  }
}
