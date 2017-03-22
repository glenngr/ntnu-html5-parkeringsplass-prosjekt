import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation/geolocation.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD403ZxaQdODw0iVMMGG7ZparzGy2rEo8g'
    })
  ],
  providers: [GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
