import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paragraph-code-form',
  templateUrl: './paragraph-code-form.component.html',
  styleUrls: ['./paragraph-code-form.component.scss'],
})
export class ParagraphCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
