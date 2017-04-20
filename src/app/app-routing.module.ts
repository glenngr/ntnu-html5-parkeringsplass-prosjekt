import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingSpaceMapHomeComponent } from './parking-space-overview/parking-space-overview.component';

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
