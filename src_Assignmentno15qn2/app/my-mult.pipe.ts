import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform
{

  transform(No1:number,No2:number)
  {
    let Ans=No1*No2;
    return Ans;
  }
 }
