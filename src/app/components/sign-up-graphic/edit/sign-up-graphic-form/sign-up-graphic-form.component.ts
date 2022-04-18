import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignUpGraphic } from '../../model/sign-up-graphic.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-sign-up-graphic-form',
  templateUrl: './sign-up-graphic-form.component.html',
  styleUrls: ['./sign-up-graphic-form.component.scss'],
})
export class SignUpGraphicFormComponent implements OnInit {
  imgHost = environment.imgHost;
  paddingTop!: any;
  paddingRight!: any;
  paddingBottom!: any;
  paddingLeft!: any;
  @Input()
  parent!: FormGroup;

  @Input()
  signUpGraphic!: SignUpGraphic;

  @Output()
  graphicChanged = new EventEmitter();

  @Output()
  bgColorChanged = new EventEmitter();

  @Output()
  paddingChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.paddingTop = this.parent.get('top')?.value;
    this.paddingRight = this.parent.get('right')?.value;
    this.paddingBottom = this.parent.get('bottom')?.value;
    this.paddingLeft = this.parent.get('left')?.value;
  }

  setGraphic(formControl: string, name: string) {
    this.graphicChanged.emit(name);
    this.parent.get(formControl)?.setValue(name);
    this.parent.get(formControl)?.markAsTouched();
  }

  setBgColor(name: string, color: any) {
    this.bgColorChanged.emit(color);
    this.parent.get(name)?.patchValue(color);
  }

  updatePadding() {
    this.paddingChanged.emit(this.parent.get('top')!.value);
    this.paddingChanged.emit(this.parent.get('right')!.value);
    this.paddingChanged.emit(this.parent.get('bottom')!.value);
    this.paddingChanged.emit(this.parent.get('left')!.value);
  }
}
