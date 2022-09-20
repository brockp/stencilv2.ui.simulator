import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-title-bar',
  templateUrl: './header-title-bar.component.html',
  styleUrls: ['./header-title-bar.component.scss'],
})
export class HeaderTitleBarComponent implements OnInit {
  DualColumnView!: string;
  Column1Config: string = 'flex-start';
  Column2Config: string = 'flex-end';
  TriColumnView!: boolean;

  @Input() headerTitleBar: any;

  constructor() {}

  ngOnInit(): void {}
}
