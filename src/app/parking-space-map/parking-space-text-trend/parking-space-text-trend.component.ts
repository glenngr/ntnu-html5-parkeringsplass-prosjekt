import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HistoryCollection, HistoryData } from '../models/history-collection.model';

@Component({
  selector: 'app-parking-space-text-trend',
  templateUrl: './parking-space-text-trend.component.html',
  styleUrls: ['./parking-space-text-trend.component.css']
})
export class ParkingSpaceTextTrendComponent implements OnInit {

  @Input() parkingSpaceTrendData: Observable<HistoryCollection>;

  name: string;
  history: HistoryData[];

  constructor() { }

  ngOnInit() {
    console.log('onninit', this.parkingSpaceTrendData);
    this.parkingSpaceTrendData.subscribe(data => {
      console.log('from trend comp', data);
      this.name = data.parkingSpaceName;
      this.history = data.history;
    });
  }

}
