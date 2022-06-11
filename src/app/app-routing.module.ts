import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/CityDetail/CityDetail.component';
import { ValueComponent } from './value/value.component';

const routes: Routes = [
  {path:"city", component:CityComponent},
  {path:"value", component:ValueComponent},
  {path:"**", redirectTo:"city", pathMatch:"full"},
  {path:'cityDetail/:cityId', component:CityDetailComponent, pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
