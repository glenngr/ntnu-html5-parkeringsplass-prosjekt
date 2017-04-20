import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../../material-design/';
import { RouterModule } from '@angular/router';

import { ParkingSpaceStatsComponent } from './parking-space-stats.component';
import { BarchartDirective } from './parking-space-barchart/barchart.directive';
import { ParkingSpaceBarchartComponent } from './parking-space-barchart/parking-space-barchart.component';
import { ParkingSpaceToolbarModule } from '../parking-space-toolbar/';
import { ParkingSpaceTextTrendComponent } from './parking-space-text-trend/parking-space-text-trend.component';
import { ReverseArrayPipe } from '../../reverse-array-pipe/reverse-array.pipe';

@NgModule({
    imports: [
        ParkingSpaceToolbarModule,
        MaterialDesignModule,
        CommonModule,
        RouterModule
    ],
    exports: [ParkingSpaceStatsComponent, ParkingSpaceTextTrendComponent],
    declarations: [
        ParkingSpaceBarchartComponent,
        BarchartDirective,
        ParkingSpaceStatsComponent,
        ParkingSpaceTextTrendComponent,
        ReverseArrayPipe,
    ],
    providers: [],
})
export class ParkingSpaceStatsModule { }

