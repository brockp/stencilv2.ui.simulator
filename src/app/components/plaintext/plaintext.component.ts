import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plaintext',
  templateUrl: './plaintext.component.html',
  styleUrls: ['./plaintext.component.scss'],
})
export class PlaintextComponent implements OnInit {
  @Input() plainText: any;

  constructor() {}

  ngOnInit(): void {}
}
