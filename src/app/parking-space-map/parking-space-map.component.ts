import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { GeolocationService } from './geolocation-service/geolocation.service';
import { ParkingSpaceWebsocketService } from './websocket-service/parking-space-websocket.service';

import { Location } from './models/location.model';
import { ParkingSpace } from './models/parkingspace.model';

@Component({
  selector: 'gg-parking-space-map',
  templateUrl: './parking-space-map.component.html',
  styleUrls: ['./parking-space-map.component.css']
})
export class ParkingSpaceMapComponent implements OnInit {
  socketSubscription: Subscription;
  userGeoLocation: Location;
  parkingSpaces: Observable<ParkingSpace[]>;
  lat = 58.146623;
  lng = 7.996178;
  mapZoom = 15;
  showAllInfowindows = true;

  constructor(private geoLocationService: GeolocationService, private parkingSpaceWsService: ParkingSpaceWebsocketService) {
  }

  onButtonClick() {
    if (this.userGeoLocation === undefined) {
      this.geoLocationService.getCurrentPosition().subscribe((newpos) => {
        this.userGeoLocation = newpos;
        this.lat = newpos.lat;
        this.lng = newpos.long;
        this.mapZoom = 13;
      });
    } else {
      /* TODO: Fix so that map automatically pans to the user 
       * location if button for showing "my location" is pressed multiple times */
      this.lat = this.userGeoLocation.lat;
      this.lng = this.userGeoLocation.long;
      this.mapZoom = 13;
    }
  }

  ngOnInit() {
    this.parkingSpaces = this.parkingSpaceWsService.connect();
  }

  mapZoomChanged(newZoomLevel: number) {
    if (newZoomLevel < 14) {
      console.log('Hiding info windows. Zoom level is:', newZoomLevel);
      this.showAllInfowindows = false;
    } else {
      console.log('Showing info windows. Zoom level is:', newZoomLevel);
      this.showAllInfowindows = true;
    }
  }
}