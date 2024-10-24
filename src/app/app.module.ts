import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./view/product-list/product-list.component";
import { UserInfoComponent } from './view/user-info/user-info.component';
import {FormsModule} from "@angular/forms";
import { CalculatorComponent } from './view/calculator/calculator.component';
import { ProductList2Component } from './view/product-list2/product-list2.component';
import { ProductDetailsComponent } from './view/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    UserInfoComponent,
    CalculatorComponent,
    ProductList2Component,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
