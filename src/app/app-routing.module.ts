import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValueComponent } from './value/value.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
