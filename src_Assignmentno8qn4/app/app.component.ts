import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  
  public str:any
  public Calculatelength(value:any)
  { 
    this.str="length of string "+value+" is " +value.length;
  }
}
