import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-headline-two-selector',
  templateUrl: './headline-two-selector.component.html',
  styleUrls: ['./headline-two-selector.component.scss'],
})
export class HeadlineTwoSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  baseAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.baseAdded.emit(this.parent.get('headlineTwoSelector')!.value);
  }
}
