import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-icon-button-code-form',
  templateUrl: './icon-button-code-form.component.html',
  styleUrls: ['./icon-button-code-form.component.scss'],
})
export class IconButtonCodeFormComponent implements OnInit {
  text!: any;
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
