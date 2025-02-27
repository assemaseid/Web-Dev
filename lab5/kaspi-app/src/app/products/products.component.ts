import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../product';
import { Category } from '../category';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-products',
  standalone:true,
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, ProductItemComponent],
  template: `
  <main>
    <div class="categories">
    <button class="category" (click)="showAllProducts()"> All Products</button>
      <div *ngFor= "let category of categories">
        <button (click)="filterProducts(category.name)" class="category">{{category.name}}</button>
      </div>
    </div>
    <div class="products-container">
      <app-product-item *ngFor="let product of filteredProductList" [productItem]="product" (remove)="remove($event)"></app-product-item>
    </div>
  </main>
  `
})

export class ProductsComponent {
  
  filteredProductList:Product[] = [];
  category: Category[] = [];
  products: Product[] = [
    {
      id:0,
      name: 'Зарядное устройство Apple',
      description: 'Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
      likes:0
    },

    {
      id:1,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четкo.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/navarrez-nv122-special-dark-moon-3-4-chernyi-107581712/?c=750000000&m=MusicAvenue&sr=1&qid=2f753171ab9db87dba3f9b12a7af1db7&isPromoted=true&ref=shared_link',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      likes:0
    },

    {
      id:2,
      name: 'Чехол Для Apple iPhone 11 прозрачный',
      description: 'Легкий, но при этом максимально- надежный чехол для Apple iPhone 11. Усиленные углы чехла - снижают силу удара на 30%.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hf3/86260519796766.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:3,
      name: 'Кабель Apple Lightning (M)',
      description: 'Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod с разъёмом Lightning к устройствам с портом USB Type-C или Thunderbolt 3 для синхронизации и подзарядки.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=gallery-medium',
      likes:0
    },
    {
      id:4,
      name: 'Смартфон Xiaomi Redmi',
      description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      rating: 2,
      link: 'https://kaspi.kz/shop/p/genau-x30-elektricheskaja-26800031/?c=750000000&m=Fitmaster&sr=1&qid=47a9cccd627ae49a4d4dc0c40b8c1c8e&isPromoted=true&ref=shared_link',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:5,
      name: 'ТВ-тумба',
      description: 'ТВ-тумба напольная Modern New Design TT, 180x40x35 см, белый, коричневый',
      rating: 3,
      link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-medium',
      likes:0
    },

    {
      id:6,
      name: 'Стул',
      description: 'Стул C06, 80x46x40 см, белый',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium',
      likes:0
    },

    {
      id:7,
      name: 'Вешалка',
      description: 'Вешалка напольная, izox, металл, 110x150 см, черный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
      likes:0
    },

    {
      id:8,
      name: 'Диван прямой Nasip Raiana',
      description: '85х230х70 см, светло-коричневый.Практичный раскладной диван, компактный и простой в уходе. ППУ (пенополиуретан).',
      rating: 3,
      link: 'https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6045250.jpeg?format=gallery-medium',
      likes:0
    },
    {
      id:9,
      name: 'Игровое кресло 501126, черный',
      description: 'Значительный показатель прочности по массе пользователя компьютерного кресла – 150 кг.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-501126-chernyi-111098602/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h17/h2b/86703072149534.png?format=gallery-medium',
      likes:0
    },
    {
      id:10,
      name: 'Смартфон Apple iPhone 13 128Gb белый',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:11,
      name: 'Матрас Ортопед без пружин',
      description: 'Матрас Ортопед без пружин, 160x200x22 см, чехол вискоза, жаккард',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/matras-ortoped-bez-pruzhin-160x200x22-sm-chehol-viskoza-zhakkard-115839796/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hea/84870309380126.png?format=gallery-medium',
      likes:0
    },
    {
      id:12,
      name: 'MISS TAIS Mauve',
      description: 'MISS TAIS Mauve карандаш коричневый №765',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-korichnevyi-765-100155528/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-medium',
      likes:0
    },
    {
      id:13,
      name: 'Бигуди',
      description: 'Бигуди керлик 3 шт d 3.5 см',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/bigudi-kerlik-3-sht-d-3-5-sm-117633136/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h28/hef/85493589147678.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:14,
      name: 'DMND спонж',
      description: 'DMND спонж скошенный, спонж капля полиуретан 2 шт',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dmnd-sponzh-skoshennyi-sponzh-kaplja-poliuretan-2-sht-104557208/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h67/64437574336542.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:15,
      name: 'Pusy гель',
      description: 'Pusy гель Super Fix Clear 5 мл',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/pusy-gel-super-fix-clear-5-ml-119031367/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/hea/86589466050590.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:16,
      name: 'Пудра RELOUIS',
      description: 'Пудра RELOUIS HD Powder Fixing transparent рассыпчатая 01 белый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/loreal-paris-telescopic-explosion-dlja-ob-ema-udlinjajuschaja-chernyi-17400312/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h59/hc8/63967837257758.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:17,
      name: 'Стеллаж',
      description: 'Стеллаж напольный Abuer, 66x31x132 см, белый',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/stellazh-napol-nyi-abuer-66x31x132-sm-belyi-104771353/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/had/hfe/85358048673822.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:18,
      name: 'Коврик Yoga Mat',
      description: 'Коврик Yoga Mat двусторонний 183x60x0.4 см розовый',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/yoga-mat-dvustoronnii-183x60x0-4-sm-rozovyi-100710438/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/had/hfe/85358048673822.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:19,
      name: 'Эспандер',
      description: 'Эспандер Фитнес-резинка 5 шт 30 кг',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/yoga-mat-dvustoronnii-183x60x0-4-sm-rozovyi-100710438/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h30/h9b/64163137388574.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:20,
      name: 'Креатин',
      description: 'Креатин MuscleLab Nutrition Creatine 300 г',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/yoga-mat-dvustoronnii-183x60x0-4-sm-rozovyi-100710438/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hdd/86894262059038.png?format=gallery-medium',
      likes:0
    },
    {
      id:21,
      name: 'Бутылка',
      description: 'Бутылка для воды 2 литра 1007 2000 мл голубой',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/yoga-mat-dvustoronnii-183x60x0-4-sm-rozovyi-100710438/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h3d/69203311656990.jpg?format=gallery-medium',
      likes:0
    },
    {
      id:22,
      name: 'Сумка',
      description: 'Сумка 30209308_511111668 23 черный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/yoga-mat-dvustoronnii-183x60x0-4-sm-rozovyi-100710438/?c=750000000',
      gallery: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/hbf/85476591140894.jpg?format=gallery-medium',
      likes:0
    }

  ];

  categories: Category[] = [
    {
      id: 0,
      name: 'Gadgets',
      products: [
        this.products[0], 
        this.products[1], 
        this.products[2], 
        this.products[3],
        this.products[10]    
      ]
    },
    {
      id: 1,
      name: 'Furniture',
      products: [
        this.products[5], 
        this.products[6], 
        this.products[7], 
        this.products[11],
        this.products[17]      
      ]
    },
    {
      id: 2,
      name: 'Beauty',
      products: [
        this.products[12], 
        this.products[14], 
        this.products[15], 
        this.products[16],
        this.products[13]  
      ]
    },
    {
      id: 3,
      name: 'Sport',
      products: [
        this.products[18], 
        this.products[19], 
        this.products[20], 
        this.products[21],
        this.products[22]    
      ]
    }
  ];

  constructor() {
    this.filteredProductList = this.products; 
  }

  showAllProducts() {
    this.filteredProductList = this.products; // Reset to all products
  }

  getCategoryByName(text:string): Category | undefined{
    return this.categories.find(category => 
      category.name.toLowerCase().includes(text.toLowerCase())
    );

  }

  filterProducts(text:string) {
    if(!text) this.filteredProductList = this.products;
    else{
      const foundcategory = this.getCategoryByName(text);
      this.filteredProductList = foundcategory ? foundcategory.products: [ ];
    }
  }

  remove(product: Product) {
    this.filteredProductList = this.filteredProductList.filter(p => p !== product);
  }

}
