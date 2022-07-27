import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slimentry',
  templateUrl: './slimentry.component.html',
  styleUrls: ['./slimentry.component.scss'],
})
export class SlimentryComponent implements OnInit {
  @Input() slimEntry: any;

  constructor() {}

  ngOnInit(): void {}
}
