import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery: string;
  currentIndex: number;
}

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule],
  template: `
    <div class="products-container">
        <div *ngFor="let product of products" class="product-card">
          <div class="image-frame">
            <img [src]="product.gallery" class="image" />
          </div>
          <div class="name-frame">
            <h2><a [href]="product.link" target="_blank">{{ product.name }}</a></h2>
          </div>
          <div class="description-frame">
            <p>{{ product.description }}</p>
          </div>
          <p class="rating">{{ getStarRating(product.rating) }}</p>
          <div class="share">
            <button (click)="shareProduct(product.link, 'whatsapp')"><img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoiHFNgehK7cEjip6pIbJ9-EUvdSX1KXA0g&s"></button>
            <button (click)="shareProduct(product.link, 'telegram')"><img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuD3eXwt6ritBgsTTlUcCjlbhxrE6BCXgYjg&s"></button>
          </div>
      </div>
    </div>
  `
})

export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Зарядное устройство Apple',
      description: 'Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
      currentIndex: 0
    },

    {
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четкo.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/navarrez-nv122-special-dark-moon-3-4-chernyi-107581712/?c=750000000&m=MusicAvenue&sr=1&qid=2f753171ab9db87dba3f9b12a7af1db7&isPromoted=true&ref=shared_link',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      currentIndex: 0
    },

    {
      name: 'Чехол Для Apple iPhone 11 прозрачный',
      description: 'Легкий, но при этом максимально- надежный чехол для Apple iPhone 11. Усиленные углы чехла - снижают силу удара на 30%.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hf3/86260519796766.jpg?format=gallery-medium',
      currentIndex: 0
    },

    {
      name: 'Кабель Apple Lightning (M)',
      description: 'Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod с разъёмом Lightning к устройствам с портом USB Type-C или Thunderbolt 3 для синхронизации и подзарядки.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=gallery-medium',
      currentIndex: 0
    },
    {
      name: 'Смартфон Xiaomi Redmi',
      description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      rating: 2,
      link: 'https://kaspi.kz/shop/p/genau-x30-elektricheskaja-26800031/?c=750000000&m=Fitmaster&sr=1&qid=47a9cccd627ae49a4d4dc0c40b8c1c8e&isPromoted=true&ref=shared_link',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      currentIndex: 0
    },
    {
      name: 'ТВ-тумба',
      description: 'ТВ-тумба напольная Modern New Design TT, 180x40x35 см, белый, коричневый',
      rating: 3,
      link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-medium',
      currentIndex: 0
    },

    {
      name: 'Стул',
      description: 'Стул C06, 80x46x40 см, белый',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium',
      currentIndex: 0
    },

    {
      name: 'Вешалка',
      description: 'Вешалка напольная, izox, металл, 110x150 см, черный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
      currentIndex: 0
    },

    {
      name: 'Диван прямой Nasip Raiana',
      description: '85х230х70 см, светло-коричневый.Практичный раскладной диван, компактный и простой в уходе. ППУ (пенополиуретан).',
      rating: 3,
      link: 'https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6045250.jpeg?format=gallery-medium',
      currentIndex: 0
    },

    {
      name: 'Игровое кресло 501126, черный',
      description: 'Значительный показатель прочности по массе пользователя компьютерного кресла – 150 кг.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-501126-chernyi-111098602/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h17/h2b/86703072149534.png?format=gallery-medium',
      currentIndex: 0
    },

  ];

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

}
