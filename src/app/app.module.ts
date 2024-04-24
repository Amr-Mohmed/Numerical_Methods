import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BisectionComponent } from './bisection/bisection.component';
import { SecantComponent } from './secant/secant.component';
import { FalsePositionComponent } from './false-position/false-position.component';
import { NewtonComponent } from './newton/newton.component';
import { FixedPointComponent } from './fixed-point/fixed-point.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BisectionComponent,
    SecantComponent,
    FalsePositionComponent,
    NewtonComponent,
    FixedPointComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
