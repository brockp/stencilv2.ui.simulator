import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-headline-two',
  templateUrl: './headline-two.component.html',
  styleUrls: ['./headline-two.component.scss'],
})
export class HeadlineTwoComponent implements OnInit {
  @Input() headline!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
