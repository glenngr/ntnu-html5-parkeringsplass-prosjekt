import { Component, OnInit, Input } from '@angular/core';
import { MdSelectChange } from '@angular/material';

import { BarChartData } from './barchart-models';

@Component({
  selector: 'app-parking-space-barchart',
  templateUrl: './parking-space-barchart.component.html',
  styleUrls: ['./parking-space-barchart.component.css']
})
export class ParkingSpaceBarchartComponent implements OnInit {
  @Input() data: BarChartData;
  @Input() title: string;
  selectedColor = 'yellow';

  constructor() { }

  ngOnInit() {
  }

  onSelectedColorchange(eventData: MdSelectChange) {
    this.selectedColor = eventData.value;
  }
}
