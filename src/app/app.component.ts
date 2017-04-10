import { Component, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LocalStorage } from 'angular2-localstorage';

import { ParkingSpaceMapComponent } from './parking-space-map/parking-space-map.component';
import { ChooseThemeDialogComponent } from './choose-theme-dialog/choose-theme-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oversikt over parkeringsplasser';
}
