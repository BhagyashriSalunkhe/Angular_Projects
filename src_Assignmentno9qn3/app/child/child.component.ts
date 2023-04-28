import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  constructor(public nobj:NumberService,public sobj:StringService){}
  
  public str1:any
  public Child1(value1:string)
  {
    var value2=parseInt(value1)
    this.str1=this.nobj.ChkPrime(value2)
  }
 
  public Count=0
  public Child2(str:string)
  {
    this.Count=this.sobj.CountCapital(str)
  }

}
