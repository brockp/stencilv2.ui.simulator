import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spacer-form',
  templateUrl: './spacer-form.component.html',
  styleUrls: ['./spacer-form.component.scss'],
})
export class SpacerFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Output()
  bgColorChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setBgColor(name: string, color: any) {
    this.bgColorChanged.emit(color);
    this.parent.get(name)?.patchValue(color);
  }
}
