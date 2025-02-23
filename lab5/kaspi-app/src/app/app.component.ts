import { Component } from '@angular/core';
import { categories } from './category';
import { products } from './product';
import { ProductListComponent } from "./product-list/product-list.component";
import { TopComponent } from "./top/top.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductListComponent, TopComponent,CommonModule]
})
export class AppComponent { 
  title = 'kaspi.kz';
  categories;
  show = false;
  categoryName = "";
  products = products;
  isCategoryContainerVisible = true;
  constructor() {
    this.categories = categories;
  }
  categoryClick(name:string){
    if(this.categoryName == name){
      this.show = false;
      this.categoryName = "";
    }
    else{
      this.show = true;
      this.categoryName = name;
    }
  }
}