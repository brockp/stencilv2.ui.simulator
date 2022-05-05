import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-description-selector',
  templateUrl: './description-selector.component.html',
  styleUrls: ['./description-selector.component.scss'],
})
export class DescriptionSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  descriptions!: any[];

  @Output()
  descriptionAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.descriptionAdded.emit(this.parent.get('descriptionSelector')!.value);
  }
}
