import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ChooseThemeDialogComponent } from './choose-theme-dialog/choose-theme-dialog.component';
import { ParkingSpaceMapModule } from './parking-space-map/';

@NgModule({
  entryComponents: [
    ChooseThemeDialogComponent
  ],
  declarations: [
    AppComponent,
    ChooseThemeDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ParkingSpaceMapModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
