import { Component } from '@angular/core';

@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html',
  
})
export class CheckPasswordComponent
{
   
   CheckPassword(Str:string)
   {
     var arr=[],Ccount=0,Scount=0,Dcount=0,SpeCount=0;
     arr=Array.from(Str);
     for(let i=0;i<arr.length;i++)
     {
      if((arr[i]>="A")&&(arr[i]<="Z"))
      {
         Ccount++;
      }
      else if((arr[i]>="a")&&(arr[i]<="z"))
      {
         Scount++;
      }
      else if((arr[i]>="0")&&(arr[i]<="9"))
      {
         Dcount++;
      }
      else 
      {
        if((arr[i]=='!')||(arr[i]=='@')||(arr[i]=='#')||(arr[i]=='$')||(arr[i]=='%')||(arr[i]=='^')||(arr[i]=='&')||(arr[i]=='*'))
        { 
        SpeCount++;
        }
      }
     
     }
     if((Ccount>2)||(Scount>3)||(Dcount>2)||(SpeCount>1))
     {
      return "Password is not as per rules"
     }
     else
     {
      return "Correct password(as per rules)"
     }
     
   }
}
