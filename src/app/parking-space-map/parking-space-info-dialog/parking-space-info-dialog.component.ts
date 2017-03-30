import { Component, ViewChild, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ParkingSpace } from '../models/parkingspace.model';

@Component({
    selector: 'app-parking-space-info-dialog',
    templateUrl: './parking-space-info-dialog.component.html',
    styleUrls: ['parking-space-info-dialog.component.css']
})
export class ParkingSpaceInfoDialogComponent {
    @Input() public parkingSpace: ParkingSpace;

    constructor(public dialogRef: MdDialogRef<ParkingSpaceInfoDialogComponent>) {
    }
}
