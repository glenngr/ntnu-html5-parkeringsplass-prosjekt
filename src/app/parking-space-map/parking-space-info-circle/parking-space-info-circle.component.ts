import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { InfoCircleColorService } from './info-circle-color.service'

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
  @Input() infoWindowOpen: boolean = true;
  circleFillColor: string = 'red';
  freeSpaces: number;

  constructor(private colorService: InfoCircleColorService) { }

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

  private updateCircleFillColor() {
    this.circleFillColor = this.colorService.getColor(this.occupiedSpaces, this.totalSpaces);
  }

  private updateFreeSpaces() {
     this.freeSpaces = this.totalSpaces - this.occupiedSpaces;
  }
}