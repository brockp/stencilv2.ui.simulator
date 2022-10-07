import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-full-editor',
  templateUrl: './full-editor.component.html',
  styleUrls: ['./full-editor.component.scss'],
})
export class FullEditorComponent implements OnInit {
  @Input() fullEditor!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
