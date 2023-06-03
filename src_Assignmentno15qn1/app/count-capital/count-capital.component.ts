import { Component } from '@angular/core';

@Component({
  selector: 'app-count-capital',
  templateUrl: './count-capital.component.html',
  
})
export class CountCapitalComponent
{
  
  Count:number=0;
  CountCapital(Str:string)
  {
    let arr=[];
    arr=Array.from(Str);
    let i=0;
    
    for(i=0;i<arr.length;i++)
    {
      if((arr[i]>='A')&&(arr[i]<='Z'))
      {
        this.Count++;
      }
    }
    
  }
}
