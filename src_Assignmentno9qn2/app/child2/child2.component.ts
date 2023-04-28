import { Component} from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component
{
  constructor(public sobj:StringService){}

  public Count=0
  public Child2(str:string)
  {
    this.Count=this.sobj.CountCapital(str)
  }
}
