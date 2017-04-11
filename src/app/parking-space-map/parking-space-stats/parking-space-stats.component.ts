import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ParkingSpaceBackendService } from '../parking-space-backend-service/';
import { HistoryCollection } from '../models/history-collection.model';
import { BarChartData } from './barchart-models';

const MAXBARSFORONEPARKINGSPACE = 7;

@Component({
  selector: 'app-parking-space-stats',
  templateUrl: './parking-space-stats.component.html',
  styleUrls: ['./parking-space-stats.component.css']
})
export class ParkingSpaceStatsComponent implements OnInit {
  parkingSpaces: Observable<string[]>;
  barChartData: BarChartData[];
  barChartTitle: string;
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
      .do(data => this.barChartTitle = data.parkingSpaceName)
      .map(this.convertToBarChartData)
      .subscribe(data => {
        this.barChartData = data;
        this.loadingHistory = false;
      });
  }

  private convertToBarChartData(data: HistoryCollection): BarChartData[] {
    const barData: BarChartData[] = [];
    const converter = new DatePipe('nb-NO');

    for (const historicData of data.history) {
      if (barData.length > MAXBARSFORONEPARKINGSPACE) {
        break;
      }

      const date = converter.transform(historicData.date, 'd/MH:mm').replace('.', '');
      barData.push(new BarChartData(date, historicData.occupiedSpaces, 'plasser', 'yellow'));
    };

    return barData;
  }
}
