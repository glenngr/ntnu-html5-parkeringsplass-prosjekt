import { Component, Input } from '@angular/core';

import { ParkingSpace } from '../models/parkingspace.model';

@Component({
  selector: 'app-parking-space-info',
  templateUrl: './parking-space-info.component.html',
  styleUrls: ['./parking-space-info.component.scss']
})
export class ParkingSpaceInfoComponent {
  @Input() public parkingSpace: ParkingSpace;
}
