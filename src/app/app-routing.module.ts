import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EstimateStartComponent} from './estimate-start/estimate-start.component';

const routes: Routes = [

  {
    path:'est-start',
    component:EstimateStartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
