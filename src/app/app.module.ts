import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'angular-google-recaptcha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot({
      siteKey: '6LdGqNAUAAAAAL7qwP4DmbVnlxzYDGE1VAJOOOZS',
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
