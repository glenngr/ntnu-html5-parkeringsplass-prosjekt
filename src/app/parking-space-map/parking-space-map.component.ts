import { Component, OnInit } from '@angular/core';

import { GeolocationService } from './geolocation-service/geolocation.service';
import { Location } from './geolocation-service/location';

@Component({
  selector: 'gg-parking-space-map',
  templateUrl: './parking-space-map.component.html',
  styleUrls: ['./parking-space-map.component.css']
})
export class ParkingSpaceMapComponent implements OnInit {

  userGeoLocation: Location;
  parkingSpaces: Location[] = [new Location(58.15533, 8.09309)];
  lat: number = 58.145975;
  lng: number = 7.985508;
  mapZoom: number = 10;

  constructor(private geoLocationService: GeolocationService) { }

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
}