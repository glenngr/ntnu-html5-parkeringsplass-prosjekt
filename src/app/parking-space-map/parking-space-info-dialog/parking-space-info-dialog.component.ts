import { Component, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-parking-space-info-dialog',
    templateUrl: './parking-space-info-dialog.component.html',
    styleUrls: ['parking-space-info-dialog.component.css']
})
export class ParkingSpaceInfoDialogComponent {
    name: string;
    description: string;
    totalSpaces: number;
    occupiedSpaces: number;
    freeSpaces: number;
    hourlyRate: number;

    constructor(public dialogRef: MdDialogRef<ParkingSpaceInfoDialogComponent>) {
    }
}
