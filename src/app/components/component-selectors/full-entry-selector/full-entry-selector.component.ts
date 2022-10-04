import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-full-entry-selector',
  templateUrl: './full-entry-selector.component.html',
  styleUrls: ['./full-entry-selector.component.scss'],
})
export class FullEntrySelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  baseAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.baseAdded.emit(this.parent.get('fullEntrySelector')!.value);
  }
}
