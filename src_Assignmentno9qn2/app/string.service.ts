import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public CountCapital(str:string)
  {
    let i=0,iCnt=0;
    for(i=0;i<=str.length;i++)
    {
      if((str.charAt(i)>='A')&&(str.charAt(i)<='Z'))
      {
        iCnt++;
      }
    }
    return iCnt;
  }
}
