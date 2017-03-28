import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { ParkingSpaceMapComponent } from './parking-space-map.component';
import { MapCircleWithInfoWindowComponent } from './map-circle-with-info-window/map-circle-with-info-window.component';
import { ParkingSpaceInfoCircleComponent } from './parking-space-info-circle/parking-space-info-circle.component';
import { InfoCircleColorService } from './parking-space-info-circle/info-circle-color.service';
import { GeolocationService } from './geolocation-service/geolocation.service';
import { ParkingSpaceWebsocketService } from './websocket-service/parking-space-websocket.service';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD403ZxaQdODw0iVMMGG7ZparzGy2rEo8g'
    }),
  ],
  providers: [
    GeolocationService,
    InfoCircleColorService,
    ParkingSpaceWebsocketService,
  ],
  declarations: [
    ParkingSpaceMapComponent,
    MapCircleWithInfoWindowComponent,
    ParkingSpaceInfoCircleComponent,
  ],
  exports: [ParkingSpaceMapComponent]
})
export class ParkingSpaceMapModule { }
