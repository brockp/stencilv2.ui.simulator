import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appheader-selector',
  templateUrl: './appheader-selector.component.html',
  styleUrls: ['./appheader-selector.component.scss'],
})
export class AppheaderSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  baseAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.baseAdded.emit(this.parent.get('appHeaderSelector')!.value);
  }
}
