import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstimateStartComponent } from './estimate-start/estimate-start.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { EstimatePage1Component } from './estimate-page1/estimate-page1.component';
import { EstimateTwoComponent } from './estimate-two/estimate-two.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstimateThreeComponent } from './estimate-three/estimate-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FinalEstimateComponent } from './final-estimate/final-estimate.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EstimateStartComponent,
    HomeComponent,
    EstimatePage1Component,
    EstimateTwoComponent,
    EstimateThreeComponent,
    FinalEstimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'one',component:EstimatePage1Component},
      {path:'two', component:EstimateTwoComponent}
    ]),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
