import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {WebStorageModule, LocalStorageService, WEBSTORAGE_CONFIG } from 'angular2-localstorage';
WEBSTORAGE_CONFIG.prefix = '';

import { AppComponent } from './app.component';
import { ChooseThemeDialogComponent } from './choose-theme-dialog/choose-theme-dialog.component';
import { ParkingSpaceMapModule } from './parking-space-map/';
import { AppRoutingModule } from './app-routing.module';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

@NgModule({
  entryComponents: [
    ChooseThemeDialogComponent
  ],
  declarations: [
    AppComponent,
    ChooseThemeDialogComponent,
    AppToolbarComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ParkingSpaceMapModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorageService,
    WebStorageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
