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
import { ParkingSpaceMapModule } from './parking-space-overview/';
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
        MaterialDesignModule,
        ParkingSpaceMapModule,
        AppRoutingModule,
    ],
    providers: [
        LocalStorageService,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
