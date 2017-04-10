import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HistoryService } from './history-service/history.service';
import { ParkingSpaceWebsocketService } from './websocket-service/parking-space-websocket.service';
import { GetHistory } from './history-service/history.service.interface';
import { WebsocketConnect, WebsocketMessages } from './websocket-service/websocket.service.interface';
import { ParkingSpaceHttpService } from './parking-space-http-service/parking-space-http.service';
import { GetParkingSpaceList } from './parking-space-http-service/parking-space-http.service.interface';

import { HistoryCollection } from '../models/history-collection.model';
import { ParkingSpace } from '../models/parkingspace.model';

@Injectable()
export class ParkingSpaceBackendService implements GetHistory, WebsocketMessages, WebsocketConnect, GetParkingSpaceList {
    messages: Observable<ParkingSpace[]>;

    constructor(
        private historyService: HistoryService,
        private webSocketService: ParkingSpaceWebsocketService,
        private parkingSpaceHttpService: ParkingSpaceHttpService) { }

    getHistory(parkingSpaceName: string): Observable<HistoryCollection> {
        return this.historyService.getHistory(parkingSpaceName);
    }

    connect() {
       this.webSocketService.connect();
       if (this.messages) {
           return;
       }
       this.messages = this.webSocketService.messages;
    }

    getParkingSpaceList(): Observable<string[]> {
        return this.parkingSpaceHttpService.getParkingSpaceList();
    }
}
