import { Component, Input } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import { ShowMeHowDialogComponent } from './show-me-how-dialog.component';

@Component({
  selector: 'app-show-me-how',
  templateUrl: './show-me-how.component.html',
  styleUrls: ['./show-me-how.component.scss']
})
export class ShowMeHowComponent {
  @Input() screenshotUrl: string;
  constructor(public dialog: MdDialog) { }

  onBtnClick() {
    const dialog = this.dialog.open(ShowMeHowDialogComponent);
    dialog.componentInstance.imgSrc = this.screenshotUrl;
  }
}
