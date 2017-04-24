import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-show-me-how-dialog',
    template: `<img [src]="imgSrc">`
})
export class ShowMeHowDialogComponent {
    imgSrc: string;

    constructor(public dialogRef: MdDialogRef<ShowMeHowDialogComponent>) {
    }
}
