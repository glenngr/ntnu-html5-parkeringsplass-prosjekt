import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import { MdButtonToggleChange } from '@angular/material';
import { LocalStorage } from 'angular2-localstorage';

import { ParkingSpaceBackendService } from '../parking-space-backend-service/';
import { HistoryCollection } from '../models/history-collection.model';
import { BarChartData, BarChartDataCollection, BarChartSelectedColorChange } from './parking-space-barchart/barchart-models';

const MAXBARSFORONEPARKINGSPACE = 7;

@Component({
  selector: 'app-parking-space-stats',
  templateUrl: './parking-space-stats.component.html',
  styleUrls: ['./parking-space-stats.component.scss']
})
export class ParkingSpaceStatsComponent implements OnInit {
  public parkingSpaces: Observable<string[]>;
  public barChartData: BarChartDataCollection[] = [];
  public barChartTitle: string;
  public loadingHistory: boolean;
  @LocalStorage() public barChartColorPreferences: BarChartColorPreference[] = [];
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
    if (this.historyDataSubscription && !this.historyDataSubscription.closed) {
      this.historyDataSubscription.unsubscribe();
    }

    this.historyDataSubscription = this.backendService
      .getHistory(parkingSpaceName)
      .debounceTime(700)
      .map(this.convertToBarChartData)
      .subscribe(data => {
        const colorPreference = BarChartColorPreferenceTools.getColorPreferenceFor(parkingSpaceName, this.barChartColorPreferences);
        const barData = new BarChartDataCollection(parkingSpaceName, data, colorPreference);
        this.barChartData.push(barData);
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

  onBarChartSelectedColorChange(event: BarChartSelectedColorChange) {
    this.barChartColorPreferences = this.barChartColorPreferences.filter(p => p.barChartTitle !== event.chartTitle);
    this.barChartColorPreferences.push(new BarChartColorPreference(event.chartTitle, event.newColor));
    console.log(event, this.barChartColorPreferences);
  }
}

class BarChartColorPreference {
  constructor(public barChartTitle: string, public color: string) { }
}

class BarChartColorPreferenceTools {
  public static hasColorPreferenceFor(key: string, list: BarChartColorPreference[]): boolean {
    return this.getColorPreferenceFor(key, list) !== undefined;
  }

  public static getColorPreferenceFor(key: string, list: BarChartColorPreference[]): string {
    const pref = list.find(p => p.barChartTitle === key);
    return pref === undefined ? undefined : pref.color;
  }
}
