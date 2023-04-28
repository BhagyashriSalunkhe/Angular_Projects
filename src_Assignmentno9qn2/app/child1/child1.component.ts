import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component 
{
  constructor(public nobj:NumberService){}
  
  public str1:any
  public Child1(value1:string)
  {
    var value2=parseInt(value1)
    this.str1=this.nobj.ChkPrime(value2)
  }
}
