import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-link-code-form',
  templateUrl: './link-code-form.component.html',
  styleUrls: ['./link-code-form.component.scss'],
})
export class LinkCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
