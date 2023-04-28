import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public str=""
  public fun()
  {
     this.str="Educating for better tommarrow"
  }
}
