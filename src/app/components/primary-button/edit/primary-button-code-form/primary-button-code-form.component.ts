import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-primary-button-code-form',
  templateUrl: './primary-button-code-form.component.html',
  styleUrls: ['./primary-button-code-form.component.scss'],
})
export class PrimaryButtonCodeFormComponent implements OnInit {
  text!: any;
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
