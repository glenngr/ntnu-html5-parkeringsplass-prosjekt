import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ParkingSpaceMapModule } from './parking-space-map/';
import { RangeFilterModule } from './range-filter/';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ParkingSpaceMapModule,
    RangeFilterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
