import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';
import {CoreModule} from './core/core.module';
import {LandingModule} from './landing/landing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RequestInterceptor} from './interceptors/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule,
    LandingModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor, // Agrega aquí tu interceptor
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
