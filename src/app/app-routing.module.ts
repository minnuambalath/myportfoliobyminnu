import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReferencesComponent } from './references/references.component';
import { SevicesComponent } from './sevices/sevices.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'services',component:SevicesComponent},
  {path:'references',component:ReferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
