import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-full-entry',
  templateUrl: './full-entry.component.html',
  styleUrls: ['./full-entry.component.scss'],
})
export class FullEntryComponent implements OnInit {
  @Input() fullEntry!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
