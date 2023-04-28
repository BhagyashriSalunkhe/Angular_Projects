import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value1:number,value2:number)
  {
    return "Multiplication of Numbers "+value1+" and "+value2+ " is "+(value1*value2)
  }

}
