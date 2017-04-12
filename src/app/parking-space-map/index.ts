import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';

import { ParkingSpaceMapComponent } from './parking-space-map.component';
import { MapCircleWithInfoWindowComponent } from './map-circle-with-info-window/map-circle-with-info-window.component';
import { ParkingSpaceInfoCircleComponent } from './parking-space-info-circle/parking-space-info-circle.component';
import { InfoCircleColorService } from './parking-space-info-circle/info-circle-color.service';
import { GeolocationService } from './geolocation-service/geolocation.service';
import { ParkingSpaceBackendModule } from './parking-space-backend-service/';
import { RangeFilterModule } from '../range-filter/';
import { ParkingSpaceToolbarModule } from './parking-space-toolbar/';
import { ParkingSpaceInfoDialogComponent } from './parking-space-info-dialog/parking-space-info-dialog.component';
import { ParkingSpaceInfoComponent } from './parking-space-info/parking-space-info.component';
import { ParkingSpaceTextTrendComponent } from './parking-space-text-trend/parking-space-text-trend.component';
import { ReverseArrayPipe } from '../reverse-array-pipe/reverse-array.pipe';
import { ParkingSpaceMapRoutingModule } from './parking-space-map-routing.module';
import { ParkingSpaceMapHomeComponent } from './parking-space-map-home.component';
import { ParkingSpaceStatsModule } from './parking-space-stats/';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD403ZxaQdODw0iVMMGG7ZparzGy2rEo8g'
    }),
    RangeFilterModule,
    MaterialModule,
    ParkingSpaceMapRoutingModule,
    ParkingSpaceToolbarModule,
    ParkingSpaceBackendModule,
    ParkingSpaceStatsModule,
  ],
  providers: [
    GeolocationService,
    InfoCircleColorService,
  ],
  declarations: [
    ParkingSpaceMapComponent,
    MapCircleWithInfoWindowComponent,
    ParkingSpaceInfoCircleComponent,
    ParkingSpaceInfoDialogComponent,
    ParkingSpaceInfoComponent,
    ParkingSpaceTextTrendComponent,
    ParkingSpaceMapHomeComponent,
    ReverseArrayPipe,
  ],
  entryComponents: [
    ParkingSpaceInfoDialogComponent,
  ],
})
export class ParkingSpaceMapModule { }
