import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountCapitalComponent } from './count-capital/count-capital.component';
import { CheckPasswordComponent } from './check-password/check-password.component';
import { ArrayAdditionComponent } from './array-addition/array-addition.component';

@NgModule({
  declarations: [
    AppComponent,
    CountCapitalComponent,
    CheckPasswordComponent,
    ArrayAdditionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
