import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-primary-button-selector',
  templateUrl: './primary-button-selector.component.html',
  styleUrls: ['./primary-button-selector.component.scss'],
})
export class PrimaryButtonSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  buttons!: any[];

  @Output()
  buttonAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.buttonAdded.emit(this.parent.get('buttonSelector')!.value);
  }
}
