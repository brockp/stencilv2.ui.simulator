import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-icon-button-selector',
  templateUrl: './icon-button-selector.component.html',
  styleUrls: ['./icon-button-selector.component.scss'],
})
export class IconButtonSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  buttons!: any[];

  @Output()
  iconButtonAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.iconButtonAdded.emit(this.parent.get('iconButtonSelector')!.value);
  }
}
