import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header-code-form',
  templateUrl: './header-code-form.component.html',
  styleUrls: ['./header-code-form.component.scss'],
})
export class HeaderCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
