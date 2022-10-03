import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-w-icon',
  templateUrl: './header-w-icon.component.html',
  styleUrls: ['./header-w-icon.component.scss'],
})
export class HeaderWIconComponent implements OnInit {
  DualColumnView!: string;
  Column1Config: string = 'flex-start';
  Column2Config: string = 'flex-end';
  TriColumnView!: boolean;

  @Input() headerWithIcon: any;

  constructor() {}

  ngOnInit(): void {}
}
