import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1 class="positive">Marvellous Infosystems</h1>
  <input type="text">
  <button>OK</button>`,
  styles: [`
    .positive
    {
     color:blue;
    }

  `]
})
export class AppComponent {
  title = 'Ngproject';
}
