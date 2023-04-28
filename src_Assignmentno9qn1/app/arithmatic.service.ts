import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService
{

  constructor() { }
  public Addition(value1:number,value2:number)
  {
    return value1+value2;
  }
  public Substraction(value1:number,value2:number)
  {
    return value1-value2;
  }
}
