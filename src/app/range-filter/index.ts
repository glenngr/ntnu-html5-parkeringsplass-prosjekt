import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/';

import { RangeFilterComponent } from './range-filter.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
  ],
  exports: [RangeFilterComponent],
  declarations: [RangeFilterComponent]
})
export class RangeFilterModule { }
