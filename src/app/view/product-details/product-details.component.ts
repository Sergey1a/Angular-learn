import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProductList} from "../product-list/product-list.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product!:IProductList;
  @Output() updateProduct = new EventEmitter<IProductList>();

  constructor() { }

  ngOnInit(): void {
  }

  updateProductDetails() {
    this.updateProduct.emit(this.product);
  }

}
