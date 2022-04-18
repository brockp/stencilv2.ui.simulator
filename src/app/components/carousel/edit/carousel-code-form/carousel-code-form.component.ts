import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carousel-code-form',
  templateUrl: './carousel-code-form.component.html',
  styleUrls: ['./carousel-code-form.component.scss'],
})
export class CarouselCodeFormComponent implements OnInit {
  @Input()
  parent!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
