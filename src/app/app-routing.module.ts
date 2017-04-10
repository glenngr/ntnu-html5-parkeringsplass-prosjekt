import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingSpaceMapComponent } from './parking-space-map/parking-space-map.component';
import { ParkingSpaceMapHomeComponent } from './parking-space-map/parking-space-map-home.component';
const appRoutes: Routes = [
    { path: '', component: ParkingSpaceMapHomeComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }
