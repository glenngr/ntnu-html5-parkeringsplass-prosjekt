import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdSelectChange } from '@angular/material';

import { BarChartData, BarChartSelectedColorChange } from './barchart-models';


@Component({
  selector: 'app-parking-space-barchart',
  templateUrl: './parking-space-barchart.component.html',
  styleUrls: ['./parking-space-barchart.component.css']
})
export class ParkingSpaceBarchartComponent implements OnInit {
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

  private _selectedColor: string = 'yellow';

  constructor() { }

  ngOnInit() {
  }

  onSelectedColorchange(eventData: MdSelectChange) {
    this.selectedColor = eventData.value;
    this.colorChange.emit(new BarChartSelectedColorChange(eventData.value, this.title));
  }
}
