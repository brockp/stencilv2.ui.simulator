import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  imgHost = environment.imgHost;
  DualColumnView!: string;
  Column1Config: string = 'flex-start';
  Column2Config: string = 'flex-end';
  TriColumnView!: boolean;

  @Input() appHeader: any;

  constructor() {}

  ngOnInit(): void {}
}
