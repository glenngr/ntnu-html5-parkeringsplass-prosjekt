import { Component, OnInit } from '@angular/core';

import { GeolocationService } from './geolocation-service/geolocation.service';
import { Location } from './geolocation-service/location';

@Component({
  selector: 'gg-parking-space-map',
  templateUrl: './parking-space-map.component.html',
  styleUrls: ['./parking-space-map.component.css']
})
export class ParkingSpaceMapComponent implements OnInit {

  userGeoLocation: Location[] = [];
  lat: number = 58.145975;
  lng: number = 7.985508;
  mapZoom: number = 10;

  constructor(private geoLocationService: GeolocationService) { }

  onButtonClick() {
    if (this.userGeoLocation.length == 0) {
      this.geoLocationService.getCurrentPosition().subscribe((newpos) => {
        this.userGeoLocation.push(newpos);
        this.lat = newpos.lat;
        this.lng = newpos.long;
        this.mapZoom = 13;
      });
    }
    else {
      this.lat = this.userGeoLocation[0].lat;
      this.lng = this.userGeoLocation[0].long;
      this.mapZoom = 13;
    }
  }

  ngOnInit() {

  }
}