import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ParkingSpaceBackendService } from '../parking-space-backend-service/';
import { HistoryCollection } from '../models/history-collection.model';

@Component({
  selector: 'app-parking-space-stats',
  templateUrl: './parking-space-stats.component.html',
  styleUrls: ['./parking-space-stats.component.css']
})
export class ParkingSpaceStatsComponent implements OnInit {
  parkingSpaces: Observable<string[]>;
  historyData: HistoryCollection;
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
      .subscribe(data => {
        this.historyData = data;
        this.loadingHistory = false;
      });
  }
}
