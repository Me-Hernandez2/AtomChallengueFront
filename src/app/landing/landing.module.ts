import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {MaterialModule} from '../material.module';
import {LandingRoutingModule} from './landing-routing.module';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LandingRoutingModule
  ]
})
export class LandingModule {
}
