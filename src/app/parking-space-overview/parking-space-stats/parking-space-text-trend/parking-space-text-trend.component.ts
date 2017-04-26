import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HistoryCollection, HistoryData } from '../../models/history-collection.model';

@Component({
  selector: 'app-parking-space-text-trend',
  templateUrl: './parking-space-text-trend.component.html',
  styleUrls: ['./parking-space-text-trend.component.css']
})
export class ParkingSpaceTextTrendComponent {
  @Input() trendData: Observable<HistoryCollection>;
}
