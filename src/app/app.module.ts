import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstimateStartComponent } from './estimate-start/estimate-start.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { EstimatePage1Component } from './estimate-page1/estimate-page1.component';
import { EstimateTwoComponent } from './estimate-two/estimate-two.component';

@NgModule({
  declarations: [
    AppComponent,
    EstimateStartComponent,
    HomeComponent,
    EstimatePage1Component,
    EstimateTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'one',component:EstimatePage1Component},
      {path:'two', component:EstimateTwoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
