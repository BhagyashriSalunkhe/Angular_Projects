import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WrongchoiceComponent } from './wrongchoice/wrongchoice.component';

const routes: Routes = [
  {path:'books',component:BooksComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'',component:TechnologiesComponent},
  {path:'**',component:WrongchoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
