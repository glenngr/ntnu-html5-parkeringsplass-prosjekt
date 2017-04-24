import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { LocationCircleColorService } from './location-circle-color.service';
import { ParkingSpace } from '../models/parkingspace.model';

@Component({
  selector: 'app-parking-space-location-circle',
  templateUrl: './parking-space-location-circle.component.html',
  styleUrls: ['./parking-space-location-circle.component.css']
})
export class ParkingSpaceLocationCircleComponent implements OnInit, OnChanges {
  @Input() parkingSpace: ParkingSpace;
  @Input() infoWindowOpen = true;
  @Output() circleClick: EventEmitter<string> = new EventEmitter<string>();
  circleFillColor = 'red';
  freeSpaces: number;

  constructor(private colorService: LocationCircleColorService, public dialog: MdDialog) { }

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
