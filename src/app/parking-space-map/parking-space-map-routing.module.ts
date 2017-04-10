import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingSpaceMapComponent } from './parking-space-map.component';
import { ParkingSpaceStatsComponent } from './parking-space-stats/parking-space-stats.component';

const parkingSpaceMapRoutes: Routes = [
    {
        path: '',
        component: ParkingSpaceMapComponent,
    },
    {
        path: 'stats',
        component: ParkingSpaceStatsComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(parkingSpaceMapRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class ParkingSpaceMapRoutingModule { }
