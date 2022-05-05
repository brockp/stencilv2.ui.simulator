import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spacer-selector',
  templateUrl: './spacer-selector.component.html',
  styleUrls: ['./spacer-selector.component.scss'],
})
export class SpacerSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  spacers!: any[];

  @Output()
  spacerAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.spacerAdded.emit(this.parent.get('spacerSelector')!.value);
  }
}
