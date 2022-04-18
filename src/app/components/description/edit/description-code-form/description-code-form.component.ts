import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-description-code-form',
  templateUrl: './description-code-form.component.html',
  styleUrls: ['./description-code-form.component.scss'],
})
export class DescriptionCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;
  text!: any;
  textColor!: any;

  constructor() {}

  ngOnInit(): void {}
}
