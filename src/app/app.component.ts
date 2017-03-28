import { Component, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { ParkingSpaceMapComponent } from './parking-space-map/parking-space-map.component';
import { ChooseThemeDialogComponent } from './choose-theme-dialog/choose-theme-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Oversikt over parkeringsplasser';

  constructor(public dialog: MdDialog) { }
  openThemeDialog() {
    let dialogRef = this.dialog.open(ChooseThemeDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
