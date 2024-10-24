import { Component } from '@angular/core';
import {IProductList} from "./view/product-list/product-list.model";
import {IUserInfo} from "./view/user-info/user-info.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static list = [
    {id: 1,name: 'хлеб', price: 20},
    {id: 2,name: 'яйца', price: 30},
    {id: 3,name: 'рыба', price: 40},
    {id: 4,name: 'лимон', price: 110},
    {id: 5,name: 'шоколад', price: 114},
  ];

  static productList2:IProductList[] = [
    {id: 1,name: 'хлеб', price: 20},
    {id: 2,name: 'яйца', price: 30},
    {id: 3,name: 'рыба', price: 40},
    {id: 4,name: 'лимон', price: 110},
    {id: 5,name: 'шоколад', price: 114},
  ];

  user:IUserInfo = {
    name: 'Сергей',
    age: 30,
    role: 'admin'
  };

  public selectedProduct:any

  onSelectProduct(product:IProductList) {
    this.selectedProduct = product;
  }

  productList:IProductList[] = AppComponent.list;
  productList2:IProductList[] = AppComponent.productList2;
}
