import {Component, Input, OnInit} from '@angular/core';
import {IProductList} from "./product-list.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  productList:IProductList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(index: number): void {
    this.productList.splice(index, 1);
  }
}
