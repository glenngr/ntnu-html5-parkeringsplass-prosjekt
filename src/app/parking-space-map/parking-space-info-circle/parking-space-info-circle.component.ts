import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { InfoCircleColorService } from './info-circle-color.service'
import { ParkingSpaceInfoDialogComponent } from '../parking-space-info-dialog/parking-space-info-dialog.component';

@Component({
  selector: 'gg-parking-space-info-circle',
  templateUrl: './parking-space-info-circle.component.html',
  styleUrls: ['./parking-space-info-circle.component.css']
})
export class ParkingSpaceInfoCircleComponent implements OnInit, OnChanges {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() parkingSpaceRadius: number = 100;
  @Input() occupiedSpaces: number;
  @Input() totalSpaces: number;
  @Input() parkingSpaceName: string;
  @Input() parkingSpaceDescription: string;
  @Input() hourlyRate: number;
  @Input() infoWindowOpen: boolean = true;
  circleFillColor: string = 'red';
  freeSpaces: number;

  constructor(private colorService: InfoCircleColorService, public dialog: MdDialog) { }

  ngOnInit() {
    this.updateCircleFillColor();
    this.updateFreeSpaces();
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes['occupiedSpaces']) {
      if (this.occupiedSpaces === undefined || this.totalSpaces === undefined) {
        return;
      }

      this.updateCircleFillColor();
      this.updateFreeSpaces();
    }
  }

  onMapCircleClick() {
    const dialogRef = this.dialog.open(ParkingSpaceInfoDialogComponent);
    const dialogInstance = dialogRef.componentInstance;
    dialogInstance.name = this.parkingSpaceName;
    dialogInstance.occupiedSpaces = this.occupiedSpaces;
    dialogInstance.totalSpaces = this.totalSpaces;
    dialogInstance.freeSpaces = this.freeSpaces;
    dialogInstance.description = this.parkingSpaceDescription;
    dialogInstance.hourlyRate = this.hourlyRate;
  }

  private updateCircleFillColor() {
    this.circleFillColor = this.colorService.getColor(this.occupiedSpaces, this.totalSpaces);
  }

  private updateFreeSpaces() {
     this.freeSpaces = this.totalSpaces - this.occupiedSpaces;
  }
}