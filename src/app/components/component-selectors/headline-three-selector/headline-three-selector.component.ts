import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-headline-three-selector',
  templateUrl: './headline-three-selector.component.html',
  styleUrls: ['./headline-three-selector.component.scss'],
})
export class HeadlineThreeSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  baseAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.baseAdded.emit(this.parent.get('headlineThreeSelector')!.value);
  }
}
