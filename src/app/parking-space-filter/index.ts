import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ParkingSpaceFilterComponent } from './parking-space-filter.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [ParkingSpaceFilterComponent],
  declarations: [ParkingSpaceFilterComponent]
})
export class ParkingSpaceFilterModule { }
