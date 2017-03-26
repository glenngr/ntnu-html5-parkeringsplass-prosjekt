import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gg-parking-space-info-circle',
  templateUrl: './parking-space-info-circle.component.html',
  styleUrls: ['./parking-space-info-circle.component.css']
})
export class ParkingSpaceInfoCircleComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() parkingSpaceRadius: number = 100;
  @Input() freeSpaces: number;
  @Input() totalSpaces: number;
  @Input() parkingSpaceName: string;
  @Input() infoWindowOpen: boolean = true;
  circleFillColor: string = 'red';
  
  constructor() { }

  ngOnInit() {
  }

}