import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-headline-code-form',
  templateUrl: './headline-code-form.component.html',
  styleUrls: ['./headline-code-form.component.scss'],
})
export class HeadlineCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  text!: any;
  textColor!: any;

  constructor() {}

  ngOnInit(): void {}
}
