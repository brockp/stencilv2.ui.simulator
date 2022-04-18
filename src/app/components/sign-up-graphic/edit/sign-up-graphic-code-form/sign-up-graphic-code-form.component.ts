import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up-graphic-code-form',
  templateUrl: './sign-up-graphic-code-form.component.html',
  styleUrls: ['./sign-up-graphic-code-form.component.scss'],
})
export class SignUpGraphicCodeFormComponent implements OnInit {
  text!: any;
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
