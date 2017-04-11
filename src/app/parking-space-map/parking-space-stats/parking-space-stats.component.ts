import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ParkingSpaceBackendService } from '../parking-space-backend-service/';
import { HistoryCollection } from '../models/history-collection.model';
import { BarChartData } from './barchart-models';

@Component({
  selector: 'app-parking-space-stats',
  templateUrl: './parking-space-stats.component.html',
  styleUrls: ['./parking-space-stats.component.css']
})
export class ParkingSpaceStatsComponent implements OnInit {
  parkingSpaces: Observable<string[]>;
  barChartData: BarChartData[];
  loadingHistory: boolean;
  private historyDataSubscription: Subscription;

  constructor(
    private backendService: ParkingSpaceBackendService,
  ) { }

  ngOnInit() {
    this.parkingSpaces = this.backendService.getParkingSpaceList();
  }

  onPsButtonClick(paringSpaceName) {
    console.log(paringSpaceName);
    this.loadingHistory = true;
    if (this.historyDataSubscription) {
      this.historyDataSubscription.unsubscribe();
    }

    this.historyDataSubscription = this.backendService
      .getHistory(paringSpaceName)
      .map(this.convertToBarChartData)
      .subscribe(data => {
        this.barChartData = data;
        this.loadingHistory = false;
      });
  }

  private convertToBarChartData(data: HistoryCollection): BarChartData[] {
    const barData: BarChartData[] = [];
    data.history.forEach(historicData => {
      barData.push(new BarChartData(historicData.date.toLocaleTimeString(), historicData.occupiedSpaces, 'plasser', 'blue'));
    });
    return barData;
  }

}
