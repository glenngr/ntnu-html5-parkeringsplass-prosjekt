import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ParkingSpaceStatsComponent } from './parking-space-stats.component';
import { BarchartDirective } from './parking-space-barchart/barchart.directive';
import { ParkingSpaceBarchartComponent } from './parking-space-barchart/parking-space-barchart.component';
import { ParkingSpaceToolbarModule } from '../parking-space-toolbar/';

@NgModule({
    imports: [
        ParkingSpaceToolbarModule,
        MaterialModule,
        CommonModule,
        RouterModule
    ],
    exports: [ParkingSpaceStatsComponent],
    declarations: [
        ParkingSpaceBarchartComponent,
        BarchartDirective,
        ParkingSpaceStatsComponent,
    ],
    providers: [],
})
export class ParkingSpaceStatsModule { }

