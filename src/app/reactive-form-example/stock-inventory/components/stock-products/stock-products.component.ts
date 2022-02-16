import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss'],
})
export class StockProductsComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Output()
  removed = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  // Gets the parent form FormArray from the container
  // Allows us to reference it in our *ngFor in the template
  // Best method in child component if using FormArray
  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  // Removing an added item form the stock FormArray
  // Passes in the FormGroup and its index
  onRemove(group: any, index: any) {
    this.removed.emit({group, index});
  }
}
