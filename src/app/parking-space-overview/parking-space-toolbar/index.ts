import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../../material-design/';
import { CommonModule } from '@angular/common';

import { ParkingSpaceToolbarLeftAlignComponent } from './parking-space-toolbar-left-align.component';
import { ParkingSpaceToolbarRightAlignComponent } from './parking-space-toolbar-right-align.component';
import { ParkingSpaceToolbarComponent } from './parking-space-toolbar.component';


@NgModule({
    imports: [
        MaterialDesignModule,
        CommonModule,
    ],
    exports: [
        ParkingSpaceToolbarLeftAlignComponent,
        ParkingSpaceToolbarRightAlignComponent,
        ParkingSpaceToolbarComponent,
    ],
    declarations: [
        ParkingSpaceToolbarLeftAlignComponent,
        ParkingSpaceToolbarRightAlignComponent,
        ParkingSpaceToolbarComponent,
    ],
    providers: [],
})
export class ParkingSpaceToolbarModule { }
