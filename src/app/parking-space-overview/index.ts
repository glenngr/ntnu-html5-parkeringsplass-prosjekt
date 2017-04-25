import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/';

import { AgmCoreModule } from '@agm/core';

import { ParkingSpaceMapComponent } from './parking-space-map/parking-space-map.component';
import {
    MapCircleWithInfoWindowComponent
} from './parking-space-location-circle/map-circle-with-info-window/map-circle-with-info-window.component';
import { ParkingSpaceLocationCircleComponent } from './parking-space-location-circle/parking-space-location-circle.component';
import { LocationCircleColorService } from './parking-space-location-circle/location-circle-color.service';
import { GeolocationService } from './geolocation-service/geolocation.service';
import { ParkingSpaceBackendModule } from './parking-space-backend-service/';
import { RangeFilterModule } from '../range-filter/';
import { ParkingSpaceToolbarModule } from './parking-space-toolbar/';
import { ParkingSpaceInfoComponent } from './parking-space-info/parking-space-info.component';
import { ParkingSpaceMapRoutingModule } from './parking-space-overview-routing.module';
import { ParkingSpaceMapHomeComponent } from './parking-space-overview.component';
import { ParkingSpaceStatsModule } from './parking-space-stats/';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD403ZxaQdODw0iVMMGG7ZparzGy2rEo8g'
        }),
        RangeFilterModule,
        MaterialDesignModule,
        ParkingSpaceMapRoutingModule,
        ParkingSpaceToolbarModule,
        ParkingSpaceBackendModule,
        ParkingSpaceStatsModule,
    ],
    providers: [
        GeolocationService,
        LocationCircleColorService,
    ],
    declarations: [
        ParkingSpaceMapComponent,
        MapCircleWithInfoWindowComponent,
        ParkingSpaceLocationCircleComponent,
        ParkingSpaceInfoComponent,
        ParkingSpaceMapHomeComponent,
    ],
})
export class ParkingSpaceOverviewModule { }
