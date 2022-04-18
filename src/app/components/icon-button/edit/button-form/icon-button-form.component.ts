import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { iconButton } from '@app/components/icon-button/model/icon-button.interface';
import { EditSidebarService } from 'src/app/services/edit-sidebar/edit-sidebar.service';
import { IconButtonService } from '@app/components/icon-button/service/icon-button.service';

@Component({
  selector: 'app-icon-button-form',
  templateUrl: './icon-button-form.component.html',
  styleUrls: ['./icon-button-form.component.scss'],
})
export class IconButtonFormComponent implements OnInit {
  paddingTop!: any;
  paddingRight!: any;
  paddingBottom!: any;
  paddingLeft!: any;
  text!: any;

  @Input()
  parent!: FormGroup;

  @Input()
  iconButton!: iconButton;

  @Output()
  iconChanged = new EventEmitter();

  @Output()
  textColorChanged = new EventEmitter();

  @Output()
  classChanged = new EventEmitter();

  @Output()
  radiusChanged = new EventEmitter();

  @Output()
  marginYChanged = new EventEmitter();

  @Output()
  bgColorChanged = new EventEmitter();

  @Output()
  widthChanged = new EventEmitter();

  constructor(private ess: EditSidebarService, public ibs: IconButtonService) {}

  ngOnInit(): void {
    this.text = this.parent.get('Text')?.value;
    this.paddingTop = this.parent.get('top')?.value;
    this.paddingRight = this.parent.get('right')?.value;
    this.paddingBottom = this.parent.get('bottom')?.value;
    this.paddingLeft = this.parent.get('left')?.value;
  }

  setMarginY(name: string, value: any) {
    this.marginYChanged.emit(value);
    this.parent.get(name)?.setValue(value);
    this.parent.get(name)?.markAsTouched();
  }

  setTextColor(name: string, color: any) {
    this.textColorChanged.emit(color);
    this.parent.get(name)?.patchValue(color);
  }

  setBgColor(name: string, color: any) {
    this.bgColorChanged.emit(color);
    this.parent.get(name)?.patchValue(color);
  }

  setWidth(formControl: string, width: string) {
    this.widthChanged.emit(width);
    this.parent.get(formControl)?.setValue(width);
    this.parent.get(formControl)?.markAsTouched();
  }

  setRadius(formControl: string, radius: string) {
    this.radiusChanged.emit(radius);
    this.parent.get(formControl)?.setValue(radius);
    this.parent.get(formControl)?.markAsTouched();
  }

  setIcon(formControl: string, name: string) {
    this.iconChanged.emit(name);
    this.parent.get(formControl)?.setValue(name);
    this.parent.get(formControl)?.markAsTouched();
  }
}
