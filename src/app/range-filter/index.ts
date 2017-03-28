import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RangeFilterComponent } from './range-filter.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [RangeFilterComponent],
  declarations: [RangeFilterComponent]
})
export class RangeFilterModule { }
