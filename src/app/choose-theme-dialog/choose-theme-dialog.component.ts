import { Component, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-theme-dialog',
  templateUrl: './choose-theme-dialog.component.html',
})
export class ChooseThemeDialogComponent {
  constructor(public dialogRef: MdDialogRef<ChooseThemeDialogComponent>) {}
}
