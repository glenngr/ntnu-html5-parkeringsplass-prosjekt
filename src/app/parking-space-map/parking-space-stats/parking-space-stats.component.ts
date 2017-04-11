import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import { MdButtonToggleChange } from '@angular/material';

import { ParkingSpaceBackendService } from '../parking-space-backend-service/';
import { HistoryCollection } from '../models/history-collection.model';
import { BarChartData, BarChartDataCollection } from './parking-space-barchart/barchart-models';

const MAXBARSFORONEPARKINGSPACE = 7;

@Component({
  selector: 'app-parking-space-stats',
  templateUrl: './parking-space-stats.component.html',
  styleUrls: ['./parking-space-stats.component.css']
})
export class ParkingSpaceStatsComponent implements OnInit {
  parkingSpaces: Observable<string[]>;
  barChartData: BarChartDataCollection[] = [];
  barChartTitle: string;
  loadingHistory: boolean;
  private historyDataSubscription: Subscription;
  private selectedParkingspaces: string[] = [];

  constructor(
    private backendService: ParkingSpaceBackendService,
  ) { }

  ngOnInit() {
    this.parkingSpaces = this.backendService.getParkingSpaceList();
  }

  onPsButtonClick(parkingSpaceName) {
    console.log(parkingSpaceName);
    this.loadingHistory = true;

  }

  private convertToBarChartData(data: HistoryCollection): BarChartData[] {
    const barData: BarChartData[] = [];
    const converter = new DatePipe('nb-NO');

    for (const historicData of data.history) {
      if (barData.length > MAXBARSFORONEPARKINGSPACE) {
        break;
      }

      const date = converter.transform(historicData.date, 'd/MH:mm').replace('.', '');
      const freeSpacesPercent = historicData.freeSpaces * 100 / historicData.totalSpaces;
      barData.push(new BarChartData(date, historicData.freeSpaces, freeSpacesPercent, 'ledig'));
    };

    return barData;
  }

  private getParkingSpaceData(parkingSpaceName: string) {
    if (this.historyDataSubscription) {
      this.historyDataSubscription.unsubscribe();
    }

    this.historyDataSubscription = this.backendService
      .getHistory(parkingSpaceName)
      .debounceTime(700)
      .map(this.convertToBarChartData)
      .subscribe(data => {
        this.barChartData.push(new BarChartDataCollection(parkingSpaceName, data));
        this.loadingHistory = false;
      });
  }

  onSelectionChanged(e: MdButtonToggleChange) {
    this.loadingHistory = true;

    if (e.source.checked) {
      this.selectedParkingspaces.push(e.value);
      this.getParkingSpaceData(e.value);
    } else {
      this.selectedParkingspaces = this.selectedParkingspaces.filter(ps => ps !== e.value);
      this.barChartData = this.barChartData.filter(bcd => bcd.name !== e.value);
      this.loadingHistory = false;
    }
  }
}
