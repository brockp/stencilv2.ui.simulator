import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { white } from '@app/config/constants';

@Component({
  selector: 'app-headline-form',
  templateUrl: './headline-form.component.html',
  styleUrls: ['./headline-form.component.scss'],
})
export class HeadlineFormComponent implements OnInit {
  @Input() parent!: FormGroup;
  @Input() text!: any;
  paddingTop!: any;
  paddingRight!: any;
  paddingBottom!: any;
  paddingLeft!: any;
  white = white;

  @Output()
  textColorChanged = new EventEmitter();

  @Output()
  bgColorChanged = new EventEmitter();

  @Output()
  paddingChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.text = this.parent.get('Text')?.value;
    this.paddingTop = this.parent.get('top')?.value;
    this.paddingRight = this.parent.get('right')?.value;
    this.paddingBottom = this.parent.get('bottom')?.value;
    this.paddingLeft = this.parent.get('left')?.value;
  }

  updatePadding() {
    this.paddingChanged.emit(this.parent.get('top')!.value);
    this.paddingChanged.emit(this.parent.get('right')!.value);
    this.paddingChanged.emit(this.parent.get('bottom')!.value);
    this.paddingChanged.emit(this.parent.get('left')!.value);
  }

  setBgColor(name: string, color: any) {
    this.bgColorChanged.emit(color);
    this.parent.get(name)?.patchValue(color);
  }

  setTextColor(name: string, color: any) {
    this.textColorChanged.emit(color);
    this.parent.get(name)?.patchValue(color);
  }
}
