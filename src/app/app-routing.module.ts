import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimatePage1Component } from './estimate-page1/estimate-page1.component';
import {EstimateStartComponent} from './estimate-start/estimate-start.component';
import { EstimateThreeComponent } from './estimate-three/estimate-three.component';
import { EstimateTwoComponent } from './estimate-two/estimate-two.component';
import { FinalEstimateComponent } from './final-estimate/final-estimate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'est-start', component:EstimateStartComponent},
  {path:'one',component:EstimatePage1Component},
  {path:'two', component:EstimateTwoComponent},
  {path:'three', component: EstimateThreeComponent},
  {path:'four', component: FinalEstimateComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [EstimatePage1Component, EstimateTwoComponent]
