import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
import { SlimEntry } from '../../model/slimentry.interface';

@Component({
  selector: 'app-text-input-code-form',
  templateUrl: './text-input-code-form.component.html',
  styleUrls: ['./text-input-code-form.component.scss'],
})
export class TextInputCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  slimEntry!: any;

  constructor() {}

  ngOnInit(): void {}
}
