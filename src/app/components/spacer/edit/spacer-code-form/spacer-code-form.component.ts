import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spacer-code-form',
  templateUrl: './spacer-code-form.component.html',
  styleUrls: ['./spacer-code-form.component.scss'],
})
export class SpacerCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
