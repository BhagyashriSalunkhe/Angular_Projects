import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public str1="";
  public str2="";

  Upper()
  {
    this.str1="MARVELLOUS INFOSYSTEMS"
  }
  Lower()
  {
    this.str2="marvellous infosystems"
  }

}
