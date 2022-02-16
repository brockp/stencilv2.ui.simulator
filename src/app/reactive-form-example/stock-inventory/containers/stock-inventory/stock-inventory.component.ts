import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';

import { Item, Product } from '../../models/product.interface';
import { StockInventoryService } from '../../services/stock-inventory.service';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent implements OnInit {
  // Passing this array of products to the 'stock-selector' child component
  products!: any;

  productMap!: Map<number, Product>;

  // form is the [formGroup]
  form = this.fb.group({
    // store can be binded to the 'formGroupName' underneath the parent [formGroup]
    store: this.fb.group({
      branch: '',
      code: '',
    }),
    // Using createStock() below to dynamically create formGroups inside of this section.
    selector: this.createStock({}),
    // FormArrays allows us to create a collection of FormControls
    stock: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder, 
    private service: StockInventoryService
    ) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe(product => {
      this.products = product;
      console.log(product)
    })
    

    // forkJoin([cart, products]).subscribe((products: any[]) => {

    //   const myMap = products.map<[number, Product]>(product => [product.id, product])
    //   // console.log(myMap);
    //   this.productMap = new Map<number, Product>(myMap);
    //   this.products = products;

    // });
  }

  // Programatically creating a FormGroup (very DRY)
  createStock(stock: any) {

    return this.fb.group({
      product_id: stock.name || '',
      quantity: stock.quantity || 10,
    });
  }

  // Add stock button to the stock FormArray
  addStock(stock: any) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  // Remove stock item from the FormArray
  removeStock({group, index}: {group: FormGroup, index: number}) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
