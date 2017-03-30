import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { ParkingSpaceMapComponent } from './parking-space-map.component';
import { MapCircleWithInfoWindowComponent } from './map-circle-with-info-window/map-circle-with-info-window.component';
import { ParkingSpaceInfoCircleComponent } from './parking-space-info-circle/parking-space-info-circle.component';
import { InfoCircleColorService } from './parking-space-info-circle/info-circle-color.service';
import { GeolocationService } from './geolocation-service/geolocation.service';
import { ParkingSpaceWebsocketService } from './websocket-service/parking-space-websocket.service';
import { RangeFilterModule } from '../range-filter/';
import { ParkingSpaceToolbarComponent } from './parking-space-toolbar/parking-space-toolbar.component';
import { ParkingSpaceInfoDialogComponent } from './parking-space-info-dialog/parking-space-info-dialog.component';
import { HistoryService } from './history-service/history.service';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD403ZxaQdODw0iVMMGG7ZparzGy2rEo8g'
    }),
    RangeFilterModule,
    MaterialModule,
    HttpModule,
  ],
  providers: [
    GeolocationService,
    InfoCircleColorService,
    ParkingSpaceWebsocketService,
    HistoryService
  ],
  declarations: [
    ParkingSpaceMapComponent,
    MapCircleWithInfoWindowComponent,
    ParkingSpaceInfoCircleComponent,
    ParkingSpaceToolbarComponent,
    ParkingSpaceInfoDialogComponent,
  ],
  entryComponents: [
    ParkingSpaceInfoDialogComponent,
  ],
  exports: [ParkingSpaceMapComponent]
})
export class ParkingSpaceMapModule { }
