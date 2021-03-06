import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss']
})
export class RangeFilterComponent implements OnInit {
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() title: string;
  @Input() value: number;
  @Output() valueChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSliderchange(event) {
    console.log(event);
    this.valueChanged.emit(event.value);
  }
}
