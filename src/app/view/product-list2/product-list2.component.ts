import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProductList} from "../product-list/product-list.model";

@Component({
  selector: 'app-product-list2',
  templateUrl: './product-list2.component.html',
  styleUrls: ['./product-list2.component.css']
})
export class ProductList2Component implements OnInit {

  @Input() productList2:IProductList[] = [];
  @Output() selectProduct = new EventEmitter<IProductList>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product:IProductList): void {
    this.selectProduct.emit(product)
  }
}
