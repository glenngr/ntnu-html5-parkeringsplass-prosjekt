import { Component, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-theme-dialog',
    templateUrl: './choose-theme-dialog.component.html',
    styleUrls: ['choose-theme-dialog.component.scss']
})
export class ChooseThemeDialogComponent {
    selectedTheme: string;
    themes: string[] = [];
    themeDict = {};

    constructor(public dialogRef: MdDialogRef<ChooseThemeDialogComponent>) {
        this.themeDict['Default theme'] = 'default';
        this.themeDict['Dark theme'] = 'dark-theme';
        this.themeDict['Unicorn dark theme'] = 'unicorn-dark-theme';
        this.themeDict['Deep purple theme'] = 'deep-purple-theme';
        for (const property in this.themeDict) {
            if (this.themeDict.hasOwnProperty(property)) {
                this.themes.push(property);
            }
        }
    }
}
