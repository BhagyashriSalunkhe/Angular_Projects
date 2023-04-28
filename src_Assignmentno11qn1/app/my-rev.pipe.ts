import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform 
{

  transform(name:string,value:string)
  {
     var Sarray:string[]=Array.from(value);
     var iStart=0;
     var iEnd=Sarray.length;
     while(iStart<iEnd)
     {
      let temp1=Sarray[iStart]
      Sarray[iStart]=Sarray[iEnd]
      Sarray[iEnd]=temp1;
      
      iStart++;
      iEnd--;
     }
     var str:string=Sarray.toString()
     return name + str.replace(/,/g,"")
  }

}
