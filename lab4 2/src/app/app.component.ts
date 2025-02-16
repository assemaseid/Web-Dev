import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    Hello Universe <br>
    Hello {{city}}, {{ 1 + 1 }}
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
})

export class AppComponent {
  city = 'San Francisco';
}


