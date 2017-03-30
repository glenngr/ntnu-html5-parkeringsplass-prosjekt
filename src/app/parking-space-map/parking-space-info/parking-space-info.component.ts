import { Component, OnInit, Input } from '@angular/core';

import { ParkingSpace } from '../models/parkingspace.model';

@Component({
  selector: 'app-parking-space-info',
  templateUrl: './parking-space-info.component.html',
  styleUrls: ['./parking-space-info.component.css']
})
export class ParkingSpaceInfoComponent implements OnInit {
  @Input() public parkingSpace: ParkingSpace;

  constructor() { }

  ngOnInit() {
  }
}
