import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value1:number,value2:number)
  {
    return "Addition of Numbers "+value1+" and "+value2+ " is "+(value1+value2)
  }

}
