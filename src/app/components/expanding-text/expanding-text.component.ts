import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanding-text',
  templateUrl: './expanding-text.component.html',
  styleUrls: ['./expanding-text.component.scss'],
})
export class ExpandingTextComponent implements OnInit {
  @Input() expandingText: any;

  constructor() {}

  ngOnInit(): void {}
}
