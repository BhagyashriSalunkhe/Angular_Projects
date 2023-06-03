import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(No1:number,No2:number)
  {
    let Ans=No1+No2;
    return Ans;
  }

}
