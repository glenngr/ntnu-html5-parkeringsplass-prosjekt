export { ParkingSpaceBackendService } from './parking-space-backend.service';

import { HistoryService } from './history-service/history.service';
import { ParkingSpaceWebsocketService } from './websocket-service/parking-space-websocket.service';
import { ParkingSpaceBackendService } from './parking-space-backend.service';
import { GetHistory } from './history-service/history.service.interface';
import { WebsocketConnect, WebsocketMessages } from './websocket-service/websocket.service.interface';
import { ParkingSpaceHttpService } from './parking-space-http-service/parking-space-http.service';
import { GetParkingSpaceList } from './parking-space-http-service/parking-space-http.service.interface';
import { BaseHttpService } from './base-http.service';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [HttpModule, CommonModule],
    exports: [],
    declarations: [],
    providers: [
        HistoryService,
        ParkingSpaceWebsocketService,
        ParkingSpaceBackendService,
        ParkingSpaceHttpService,
        BaseHttpService,
    ],
})
export class ParkingSpaceBackendModule { }
