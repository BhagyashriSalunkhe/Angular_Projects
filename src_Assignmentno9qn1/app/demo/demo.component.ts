import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
  constructor(public aobj:ArithmaticService){}
  public Add:any
  public Sub:any
  ngOnInit()
  {
    this.Add=this.aobj.Addition(11,10)
    this.Sub=this.aobj.Substraction(11,10)
  }

}
