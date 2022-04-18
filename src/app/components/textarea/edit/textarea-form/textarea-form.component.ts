import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-form',
  templateUrl: './textarea-form.component.html',
  styleUrls: ['./textarea-form.component.scss'],
})
export class TextareaFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
