import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  public ChkPrime(value:number)
  {
    
    let i=1,iCnt=0;
    for(i=1;i<=value;i++)
    {
      if((value%i)==0)
      {
        iCnt++;
      }
    }
    if(iCnt==2)
    {
      return "Number is Prime"
    }
    else
    {
      return "Number is not prime"
    }
  }
}
