import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialDesignModule } from './material-design/';
import { WebStorageModule, LocalStorageService, WEBSTORAGE_CONFIG } from 'angular2-localstorage';
WEBSTORAGE_CONFIG.prefix = '';

import { AppComponent } from './app.component';
import { ChooseThemeDialogComponent } from './choose-theme-dialog/choose-theme-dialog.component';
import { ParkingSpaceOverviewModule } from './parking-space-overview/';
import { AppRoutingModule } from './app-routing.module';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { HelpAboutModule } from './help-about/';
import { NotFound404Component } from './not-found-404/not-found-404.component';

@NgModule({
    entryComponents: [
        ChooseThemeDialogComponent
    ],
    declarations: [
        AppComponent,
        ChooseThemeDialogComponent,
        AppToolbarComponent,
        NotFound404Component,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialDesignModule,
        ParkingSpaceOverviewModule,
        AppRoutingModule,
        HelpAboutModule,
    ],
    providers: [
        LocalStorageService,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
