import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header-title-bar-selector',
  templateUrl: './header-title-bar-selector.component.html',
  styleUrls: ['./header-title-bar-selector.component.scss'],
})
export class HeaderTitleBarSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  components!: any[];

  @Output()
  baseAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.baseAdded.emit(this.parent.get('headerTitleBarSelector')!.value);
  }
}
