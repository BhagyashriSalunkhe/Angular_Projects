import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  Object:any
  constructor(public fobj: FormBuilder)
  {}
  NewForm=this.fobj.group(
    {
       Firstname:['',
       [Validators.required,
       Validators.pattern("^[a-z A-Z]{2,20}$"),]
       ],
       Lastname:[''],
       PhoneNumber:['',
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),],
      EmailId:['',Validators.required,
       Validators.email],
       City:['',Validators.required,Validators.pattern("^[a-z A-Z]{2,15}$"),],
       State:['',Validators.required],
       ZipCode:['',Validators.pattern("^[0-5]{6}$"),],
       Comments:['',Validators.pattern("^[a-z A-Z]{0-30}$"),],
    }
  )

   validatePhoneNumber()
  {
    this.Object=this.NewForm
      if (this.Object.PhoneNumber.value.length === null || this.Object.PhoneNumber.value === "" || this.Object.PhoneNumber.value.length <10 ||  this.Object.PhoneNumber.value.length > 10)
      {
          this.Object.getElementById('PhoneNumber').innerHTML = "Please enter valid Phone Number";
          return false;
         }
      return true;
  }
  
}
