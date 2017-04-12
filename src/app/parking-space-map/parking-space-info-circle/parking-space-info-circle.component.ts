import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { InfoCircleColorService } from './info-circle-color.service';
import { ParkingSpaceInfoDialogComponent } from '../parking-space-info-dialog/parking-space-info-dialog.component';
import { ParkingSpace } from '../models/parkingspace.model';

@Component({
  selector: 'gg-parking-space-info-circle',
  templateUrl: './parking-space-info-circle.component.html',
  styleUrls: ['./parking-space-info-circle.component.css']
})
export class ParkingSpaceInfoCircleComponent implements OnInit, OnChanges {
  @Input() parkingSpace: ParkingSpace;
  @Input() infoWindowOpen = true;
  @Output() circleClick: EventEmitter<string> = new EventEmitter<string>();
  circleFillColor = 'red';
  freeSpaces: number;

  constructor(private colorService: InfoCircleColorService, public dialog: MdDialog) { }

  ngOnInit() {
    this.updateCircleFillColor();
    this.updateFreeSpaces();
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes['occupiedSpaces']) {
      if (!this.parkingSpace || !this.parkingSpace.occupiedSpaces || !this.parkingSpace.totalSpaces) {
        return;
      }

      this.updateCircleFillColor();
      this.updateFreeSpaces();
    }
  }

  onMapCircleClick() {
    if (!this.parkingSpace) {
      return;
    }
    this.circleClick.emit(this.parkingSpace.name);
  }

  private updateCircleFillColor() {
    if (!this.parkingSpace) {
      return;
    }
    this.circleFillColor = this.colorService.getColor(this.parkingSpace.occupiedSpaces, this.parkingSpace.totalSpaces);
  }

  private updateFreeSpaces() {
    if (!this.parkingSpace) {
      return;
    }
    this.freeSpaces = this.parkingSpace.totalSpaces - this.parkingSpace.occupiedSpaces;
  }
}
