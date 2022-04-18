import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input-form',
  templateUrl: './text-input-form.component.html',
  styleUrls: ['./text-input-form.component.scss'],
})
export class TextInputFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
