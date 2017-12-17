import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdSelectChange } from '@angular/material';

import { BarChartData, BarChartSelectedColorChange } from './barchart-models';


@Component({
  selector: 'app-parking-space-barchart',
  templateUrl: './parking-space-barchart.component.html',
  styleUrls: ['./parking-space-barchart.component.scss']
})
export class ParkingSpaceBarchartComponent {
  @Input() data: BarChartData;
  @Input() title: string;
  // tslint:disable-next-line:no-input-rename
  @Input('color') set selectedColor(color: string) {
    console.log('setting color to ', color);
    if (color === undefined || color === null) {
      return;
    }

    this._selectedColor = color;
  }

  get selectedColor(): string {
    return this._selectedColor;
  }
  @Output() colorChange = new EventEmitter<any>();

  private _selectedColor = 'yellow';

  onSelectedColorchange(eventData: MdSelectChange) {
    this.selectedColor = eventData.value;
    this.colorChange.emit(new BarChartSelectedColorChange(eventData.value, this.title));
  }
}
