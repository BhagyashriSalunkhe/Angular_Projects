import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform
{
 

  transform(value:number,str:string):any
  {
     if(str=="even")
     {
          if((value%2)==0)
          {
            return "Number is even"
          }
          else
          {
            return "Number is not Even"
          }
     }
     else if(str=="odd")
     {
          if((value%2)!=0)
          {
            return "Number is Odd"
          }
          else
          {
            return "Number is not odd"
          }
     }
     else if(str=="prime")
     {
          var iCnt=0,Count=0;
          for(iCnt=1;iCnt<=value;iCnt++)
          {
          if((value%iCnt)==0)
          {
            Count++
          }
          }
          if(Count>2)
          {
            return "It is not prime number"
          }
          else
          {
            return "It is prime Number"
          }
     }
     else if (str=="perfect")
     {
          var Cnt=0,Sum=0;
          for(Cnt=1;Cnt<value;Cnt++)
          {
            var rem=value%Cnt
          if(rem==0)
          {
            Sum=Sum+Cnt
          }
          }
          if(Sum==value)
          {
            return "Number is perfect"
          }
          else
          {
            return "Number is not perfect"
          }
     }
    else
    {
          return "Enter the that you want to check"
    }
  }

}
