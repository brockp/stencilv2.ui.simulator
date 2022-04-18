import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TAILWIND } from '../../../../editor/models/tailwind.constants';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss'],
})
export class LinkFormComponent implements OnInit {
  align = TAILWIND.textAlign;

  @Input()
  parent!: FormGroup;

  @Output()
  textAlignChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setTextAlign(name: string, value: any) {
    this.textAlignChanged.emit(value);
    this.parent.get(name)?.setValue(value);
    this.parent.get(name)?.markAsTouched();
  }
}
