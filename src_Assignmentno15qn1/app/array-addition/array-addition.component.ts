import { Component } from '@angular/core';

@Component({
  selector: 'app-array-addition',
  templateUrl: './array-addition.component.html',
  styleUrls: ['./array-addition.component.css']
})
export class ArrayAdditionComponent
{
   ArrayAddition(Arr=[])
   {
    var Sum=0;
     for(let i=0;i<Arr.length;i++)
     {
      Sum=Sum+Arr[i];
     }
    return Sum;
   }
}
