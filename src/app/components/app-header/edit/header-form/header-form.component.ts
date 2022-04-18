import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppHeader } from '@app/components/app-header/model/app-header.interface';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss'],
})
export class HeaderFormComponent implements OnInit {
  paddingTop!: any;
  paddingRight!: any;
  paddingBottom!: any;
  paddingLeft!: any;
  @Input()
  parent!: FormGroup;

  @Input()
  appHeader!: AppHeader;

  @Output()
  iconChanged = new EventEmitter();

  @Output()
  rightIconChanged = new EventEmitter();

  @Output()
  logoChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setIcon(formControl: string, name: string) {
    this.iconChanged.emit(name);
    this.parent.get(formControl)?.setValue(name);
    this.parent.get(formControl)?.markAsTouched();
  }

  setLogo(formControl: string, src: string) {
    this.logoChanged.emit(src);
    this.parent.get(formControl)?.setValue(src);
    this.parent.get(formControl)?.markAsTouched();
  }

  setRightIcon(formControl: string, name: string) {
    this.rightIconChanged.emit(name);
    this.parent.get(formControl)?.setValue(name);
    this.parent.get(formControl)?.markAsTouched();
  }
}
