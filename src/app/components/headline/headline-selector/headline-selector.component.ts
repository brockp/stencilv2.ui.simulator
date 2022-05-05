import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-headline-selector',
  templateUrl: './headline-selector.component.html',
  styleUrls: ['./headline-selector.component.scss'],
})
export class HeadlineSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  headlines!: any[];

  @Output()
  added = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.added.emit(this.parent.get('headlineSelector')!.value);
  }
}
