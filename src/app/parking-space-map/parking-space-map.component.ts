import { Component, OnInit } from '@angular/core';

import { GeolocationService } from './geolocation-service/geolocation.service';
import { Location } from './models/location.model';
import { ParkingSpace } from './models/parkingspace.model';

@Component({
  selector: 'gg-parking-space-map',
  templateUrl: './parking-space-map.component.html',
  styleUrls: ['./parking-space-map.component.css']
})
export class ParkingSpaceMapComponent implements OnInit {
  userGeoLocation: Location;
  parkingSpaces: ParkingSpace[] = [];
  lat: number = 58.146623;
  lng: number = 7.996178;
  mapZoom: number = 15;
  showAllInfowindows: boolean = true;

  constructor(private geoLocationService: GeolocationService) {
    this.parkingSpaces = [
      new ParkingSpace('P1', 100, 98, new Location(58.147737, 8.006584), 20),
      new ParkingSpace('P2', 200, 108, new Location(58.148561, 7.989738), 25),
      new ParkingSpace('P3', 50, 50, new Location(58.144350, 7.991619), 15),
      new ParkingSpace('P4', 70, 40, new Location(58.138972, 7.998729), 15),
    ]
  }

  onButtonClick() {
    if (this.userGeoLocation === undefined) {
      this.geoLocationService.getCurrentPosition().subscribe((newpos) => {
        this.userGeoLocation = newpos;
        this.lat = newpos.lat;
        this.lng = newpos.long;
        this.mapZoom = 13;
      });
    }
    else {
      /* TODO: Fix so that map automatically pans to the user 
       * location if button for showing "my location" is pressed multiple times */
      this.lat = this.userGeoLocation.lat;
      this.lng = this.userGeoLocation.long;
      this.mapZoom = 13;
    }
  }

  ngOnInit() {

  }

  mapZoomChanged(newZoomLevel: number) {
    if (newZoomLevel < 14) {
      console.log('Hiding info windows. Zoom level is:', newZoomLevel);
      this.showAllInfowindows = false;
    }
    else {
      console.log('Showing info windows. Zoom level is:', newZoomLevel);
      this.showAllInfowindows = true;
    }
  }
}