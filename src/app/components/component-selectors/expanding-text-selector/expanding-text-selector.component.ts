import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expanding-text-selector',
  templateUrl: './expanding-text-selector.component.html',
  styleUrls: ['./expanding-text-selector.component.scss'],
})
export class ExpandingTextSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  baseAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.baseAdded.emit(this.parent.get('expandingTextSelector')!.value);
  }
}
