import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
   {path:"welcome", component:WelcomeComponent},
  {path:"home", component:HomeComponent}, 
   {path:"thanks", component:ThanksComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
