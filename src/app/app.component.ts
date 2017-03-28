import { Component, ViewChild } from '@angular/core';

import { ParkingSpaceMapComponent } from './parking-space-map/parking-space-map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Oversikt over parkeringsplasser';

  constructor() { }

}
