import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline-three',
  templateUrl: './headline-three.component.html',
  styleUrls: ['./headline-three.component.scss'],
})
export class HeadlineThreeComponent implements OnInit {
  @Input() headline: any;

  constructor() {}

  ngOnInit(): void {}
}
