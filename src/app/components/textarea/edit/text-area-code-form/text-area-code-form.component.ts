import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area-code-form',
  templateUrl: './text-area-code-form.component.html',
  styleUrls: ['./text-area-code-form.component.scss'],
})
export class TextAreaCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
