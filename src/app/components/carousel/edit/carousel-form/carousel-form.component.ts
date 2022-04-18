import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carousel-form',
  templateUrl: './carousel-form.component.html',
  styleUrls: ['./carousel-form.component.scss'],
})
export class CarouselFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Output()
  graphicChanged = new EventEmitter();

  @Output()
  sectionTwoGraphicChanged = new EventEmitter();

  @Output()
  sectionThreeGraphicChanged = new EventEmitter();

  @Output()
  sectionOneTextColorChanged = new EventEmitter();

  @Output()
  sectionTwoTextColorChanged = new EventEmitter();

  @Output()
  sectionThreeTextColorChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setTextColor(
    formGroupOne: string,
    formGroupTwo: string,
    name: string,
    color: any
  ) {
    this.sectionOneTextColorChanged.emit(color);
    this.parent.get([formGroupOne, formGroupTwo, name])!.patchValue(color);
  }

  setSectionTwoTextColor(
    formGroupOne: string,
    formGroupTwo: string,
    name: string,
    color: any
  ) {
    this.sectionTwoTextColorChanged.emit(color);
    this.parent.get([formGroupOne, formGroupTwo, name])!.patchValue(color);
  }

  setSectionThreeTextColor(
    formGroupOne: string,
    formGroupTwo: string,
    name: string,
    color: any
  ) {
    this.sectionThreeTextColorChanged.emit(color);
    this.parent.get([formGroupOne, formGroupTwo, name])!.patchValue(color);
  }

  setGraphic(formControl: string, name: string) {
    this.graphicChanged.emit(name);
    this.parent.get(formControl)?.setValue(name);
    this.parent.get(formControl)?.markAsTouched();
  }

  setSectionTwoGraphic(formControl: string, name: string) {
    this.sectionTwoGraphicChanged.emit(name);
    this.parent.get(formControl)?.setValue(name);
    this.parent.get(formControl)?.markAsTouched();
  }

  setSectionThreeGraphic(formControl: string, name: string) {
    this.sectionThreeGraphicChanged.emit(name);
    this.parent.get(formControl)?.setValue(name);
    this.parent.get(formControl)?.markAsTouched();
  }
}
