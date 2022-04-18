import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-code-form',
  templateUrl: './input-code-form.component.html',
  styleUrls: ['./input-code-form.component.scss'],
})
export class InputCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
