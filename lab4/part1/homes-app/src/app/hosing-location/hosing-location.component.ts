import { Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hosing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template:`
    <section class="listing">
      <img class="listing-photo" [src] = "housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="list ing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details',housingLocation.id]">Learn More</a>
    </section>
    `,
  styleUrls: ['./hosing-location.component.css']
})
export class HosingLocationComponent {
  @Input() housingLocation!:HousingLocation;
}
