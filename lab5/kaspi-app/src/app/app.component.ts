import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { TopComponent } from "./top/top.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaspi-app';
}
