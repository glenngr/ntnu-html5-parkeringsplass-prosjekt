import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

import { GeolocationService } from './geolocation-service/geolocation.service';
import { ParkingSpaceWebsocketService } from './websocket-service/parking-space-websocket.service';

import { Location } from './models/location.model';
import { ParkingSpace } from './models/parkingspace.model';

@Component({
  selector: 'app-parking-space-map',
  templateUrl: './parking-space-map.component.html',
  styleUrls: ['./parking-space-map.component.css']
})
export class ParkingSpaceMapComponent implements OnInit, OnDestroy {
  socketSubscription: Subscription;
  userGeoLocation: Location;
  parkingSpaces: ParkingSpace[];
  freeParkingSpacesFilterValue$: Subject<number>;
  destroyed$: Subject<any>;
  lat = 58.146623;
  lng = 7.996178;
  mapZoom = 15;
  showAllInfowindows = true;
  showingUserLocation = false;
  showParkingSpaceToolbar = true;
  private previousMapLocation: PreviousMapLocation;

  constructor(private geoLocationService: GeolocationService, private parkingSpaceWsService: ParkingSpaceWebsocketService) {
    this.freeParkingSpacesFilterValue$ = new Subject<number>();
    this.destroyed$ = new Subject<any>();
  }

  onShowMyLocationButtonClick() {
    this.showingUserLocation = true;
    this.previousMapLocation = new PreviousMapLocation(this.lat, this.lng, this.mapZoom);

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

  onHideMyLocationButtonClick() {
    this.showingUserLocation = false;
    this.lat = this.previousMapLocation.lat;
    this.lng = this.previousMapLocation.long;
    this.mapZoom = this.previousMapLocation.zoomLevel;
  }

  ngOnInit() {
    this.parkingSpaceWsService.connect();
    Observable.combineLatest(
      this.parkingSpaceWsService.messages.distinctUntilChanged(),
      this.freeParkingSpacesFilterValue$.distinctUntilChanged()
    ).takeUntil(this.destroyed$)
      .subscribe(([parkingSpaces, minFreeSpaces]) => {
        this.parkingSpaces = parkingSpaces.filter(ps => ps.totalSpaces - ps.occupiedSpaces >= minFreeSpaces);
      });
    this.freeParkingSpacesFilterValue$.next(0); // Default filter value is 0
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
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

  freeSpacesFilterChanged(newValue) {
    this.freeParkingSpacesFilterValue$.next(newValue);
  }

  trackByIdAndOccupiedSpaces(index, item: ParkingSpace) {
    return item.name + '-' + item.occupiedSpaces;
  }
}

class PreviousMapLocation {
  constructor(public lat: number, public long: number, public zoomLevel: number) { }
}
