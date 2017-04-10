import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { LocalStorage } from 'angular2-localstorage';

import { GeolocationService } from './geolocation-service/geolocation.service';
import { ParkingSpaceWebsocketService } from './websocket-service/parking-space-websocket.service';
import { HistoryService } from './history-service/history.service';

import { Location } from './models/location.model';
import { ParkingSpace } from './models/parkingspace.model';
import { HistoryCollection } from './models/history-collection.model';

@Component({
  selector: 'app-parking-space-map',
  templateUrl: './parking-space-map.component.html',
  styleUrls: ['./parking-space-map.component.css']
})
export class ParkingSpaceMapComponent implements OnInit, OnDestroy {
  sidenavTrend: Observable<HistoryCollection>;
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
  showSidenavParkingSpaceTrend = false;
  connectionError = false;
  sidenavData: ParkingSpace;
  private previousMapLocation: PreviousMapLocation;
  @LocalStorage() private freeParkingSpacesLocalStorageValue = 0;
  @ViewChild(MdSidenav) private sideNav: MdSidenav;

  constructor(
    private geoLocationService: GeolocationService,
    private parkingSpaceWsService: ParkingSpaceWebsocketService,
    private historyService: HistoryService
  ) {
    this.freeParkingSpacesFilterValue$ = new Subject<number>();
    this.destroyed$ = new Subject<any>();
  }

  onCircleClick(event) {
    this.sideNav.open();
    console.log(event);
    this.sidenavData = this.parkingSpaces.find(ps => ps.name === event);
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

  onShowTrend() {
    this.showSidenavParkingSpaceTrend = true;
    const pname = this.sidenavData.name;
    this.sidenavTrend = this.historyService.getHistory(pname);
  }

  onSidenavClose() {
    this.showSidenavParkingSpaceTrend = false;
    this.sidenavTrend = undefined;
    this.sidenavData = undefined;
  }

  ngOnInit() {
    this.parkingSpaceWsService.connect();
    Observable.combineLatest(
      this.parkingSpaceWsService.messages.distinctUntilChanged(),
      this.freeParkingSpacesFilterValue$.distinctUntilChanged()
    ).timeout(30000)
      .takeUntil(this.destroyed$)
      .subscribe(([parkingSpaces, minFreeSpaces]) => {
        this.parkingSpaces = parkingSpaces.filter(ps => ps.totalSpaces - ps.occupiedSpaces >= minFreeSpaces);
      },
      (err) => {
        this.connectionError = true;
        console.error(err);
      });
    this.freeParkingSpacesFilterValue$.next(this.freeParkingSpacesLocalStorageValue); // Emit the last value from LocalStorage
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
    this.freeParkingSpacesLocalStorageValue = newValue;
    this.freeParkingSpacesFilterValue$.next(newValue);
  }

  trackByIdAndOccupiedSpaces(index, item: ParkingSpace) {
    return item.name + '-' + item.occupiedSpaces;
  }
}

class PreviousMapLocation {
  constructor(public lat: number, public long: number, public zoomLevel: number) { }
}
