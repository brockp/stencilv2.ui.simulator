import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slimeditor',
  templateUrl: './slimeditor.component.html',
  styleUrls: ['./slimeditor.component.scss'],
})
export class SlimeditorComponent implements OnInit {
  @Input() slimEditor: any;

  constructor() {}

  ngOnInit(): void {}
}
