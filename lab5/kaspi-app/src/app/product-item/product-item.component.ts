import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  template: `
    <div class="product-card">
      <div class="image-frame">
        <button (click)="removeItem()"><img class="remove" src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubXSwM5i62z5ZsAhDsg1db5y7_DPEjLPRYQ&s'></button>
        <img [src]="productItem.gallery" class="image" />
      </div>
      <div class="name-frame">
        <h2><a [href]="productItem.link" target="_blank">{{ productItem.name }}</a></h2>
      </div>
      <div class="description-frame">
        <p>{{ productItem.description }}</p>
      </div>
      <div class="add-data">
        <p class="rating">{{ getStarRating(productItem.rating) }}</p>
        <p class="likes">Like:{{ productItem.likes }}</p>
      </div>
      <div class="share">
      <button (click)="shareProduct(productItem.link, 'whatsapp')"><img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoiHFNgehK7cEjip6pIbJ9-EUvdSX1KXA0g&s"></button>
      <button (click)="shareProduct(productItem.link, 'telegram')"><img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuD3eXwt6ritBgsTTlUcCjlbhxrE6BCXgYjg&s"></button>
      <button (click)="increaseLike(productItem.likes)"><img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnvixcPexFhYY3Syy5qzsV7RHzn5ZfZ1pGHXxuuS83ZU1A1VlGYMP9Y3HFU8C-h82bIQ&usqp=CAU"></button>
    </div>
  `,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() productItem!: Product;
  @Output() remove = new EventEmitter<Product>(); 
  
  islike:boolean = false;
 
  shareProduct(link: string, platform: 'whatsapp' | 'telegram'): void {
    const message = encodeURIComponent(`Check out this product: ${link}`);
    const url = platform === 'whatsapp' 
      ? `https://api.whatsapp.com/send?text=${message}`
      : `https://t.me/share/url?url=${link}&text=${message}`;
    window.open(url, '_blank');
  }

  getStarRating(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  increaseLike(like:number){
    if (!this.islike) {
      this.productItem.likes += 1;
    }else{
      this.productItem.likes -= 1;
    }
    this.islike = !this.islike;
  }
  removeItem(): void {
    this.remove.emit(this.productItem);
  }
}

