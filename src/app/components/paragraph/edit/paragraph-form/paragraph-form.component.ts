import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paragraph-form',
  templateUrl: './paragraph-form.component.html',
  styleUrls: ['./paragraph-form.component.scss'],
})
export class ParagraphFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
