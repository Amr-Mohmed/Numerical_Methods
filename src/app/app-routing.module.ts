import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BisectionComponent } from './bisection/bisection.component';
import { SecantComponent } from './secant/secant.component';
import { FalsePositionComponent } from './false-position/false-position.component';
import { NewtonComponent } from './newton/newton.component';
import { FixedPointComponent } from './fixed-point/fixed-point.component';

const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent,pathMatch:'full'},
  {path:'bisection', component:BisectionComponent,pathMatch:'full'},
  {path:'secant', component:SecantComponent,pathMatch:'full'},
  {path:'false', component:FalsePositionComponent,pathMatch:'full'},
  {path:'newton', component:NewtonComponent,pathMatch:'full'},
  {path:'fixed', component:FixedPointComponent,pathMatch:'full'},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
