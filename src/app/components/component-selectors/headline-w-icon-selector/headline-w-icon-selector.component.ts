import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-headline-w-icon-selector',
  templateUrl: './headline-w-icon-selector.component.html',
  styleUrls: ['./headline-w-icon-selector.component.scss'],
})
export class HeadlineWIconSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  baseAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.baseAdded.emit(this.parent.get('headerWithIconSelector')!.value);
  }
}
