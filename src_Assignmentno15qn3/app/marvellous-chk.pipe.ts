import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform
  (value:number,Str:string):any
  {
    if(Str=="even")
    {
      if((value%2)==0)
      {
        return "Number is even"
      }
      else
      {
        return "Number is not even"
      }
    }
    else if(Str=="odd")
    {
       if((value%2)!=0)
      {
        return "Number is odd"
      }
      else
      {
        return "Number is not odd"
      }

    }
    else if(Str=="prime")
    {
      let Count=0;
      for(let i=1;i<=value;i++)
      {
         if((value%i)==0)
         {
          Count++;
         }
      }
      if(Count>2)
      {
        return "Number is not prime number"
      }
      else
      {
        return "Number is prime"
      }
    }
    else if(Str=="perfect")
    {
      let Sum=0;
      for(let i=1;i<value;i++)
      {
         if((value%i)==0)
         {
          Sum=Sum+i;
         }
      }
      if(Sum==value)
      {
        return "Number is perfect number"
      }
      else
      {
        return "Number is not perfect number";
      }
    }
    else
    {
      return "No such function"
    }
  }

}
