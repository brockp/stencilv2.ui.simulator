import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-selectortwo',
  templateUrl: './base-selector.component.html',
  styleUrls: ['./base-selector.component.scss'],
})
export class BaseSelectorTwoComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  baseAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.baseAdded.emit(this.parent.get('baseComponentSelector')!.value);
  }
}
