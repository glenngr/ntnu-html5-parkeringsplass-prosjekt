import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { ParkingSpaceMapComponent } from './parking-space-map.component';
import { MapCircleWithInfoWindowComponent } from './map-circle-with-info-window/map-circle-with-info-window.component';
import { GeolocationService } from './geolocation-service/geolocation.service';

@NgModule({
  imports: [
    CommonModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD403ZxaQdODw0iVMMGG7ZparzGy2rEo8g'
    }),
  ],
  providers: [
    GeolocationService
  ],
  declarations: [ParkingSpaceMapComponent, MapCircleWithInfoWindowComponent],
  exports: [ParkingSpaceMapComponent]
})
export class ParkingSpaceMapModule { }