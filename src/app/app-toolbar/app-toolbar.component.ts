import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LocalStorage } from 'angular2-localstorage';

import { ChooseThemeDialogComponent } from '../choose-theme-dialog/choose-theme-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent {

  @Input() appTitle;
  @LocalStorage() theme = 'default';

  constructor(public dialog: MdDialog) { }

  openThemeDialog() {
    const dialogRef = this.dialog.open(ChooseThemeDialogComponent);
    dialogRef.componentInstance.selectedTheme = this.theme;
    dialogRef.afterClosed().subscribe(chosenTheme => {
      if (chosenTheme) {
        this.theme = chosenTheme;
      }
    });
  }
}