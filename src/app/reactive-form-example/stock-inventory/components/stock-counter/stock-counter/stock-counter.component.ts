import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss'],
})
export class StockCounterComponent implements OnInit {
  @Input()
  step: number = 10;
  @Input()
  min: number = 10;
  @Input()
  max: number = 1000;

  value: number = 10;
  constructor() {}

  ngOnInit(): void {}

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
    }
  }
}
