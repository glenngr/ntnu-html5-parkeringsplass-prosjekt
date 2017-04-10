import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HistoryCollection, HistoryData } from '../../models/history-collection.model';
import { BaseHttpService } from '../base-http.service';
import { GetParkingSpaceList } from './parking-space-http.service.interface';

@Injectable()
export class ParkingSpaceHttpService implements GetParkingSpaceList {
    private baseBackendUrl: string;
    private parkingSpacesResource = this.baseBackendUrl + 'parkingSpaces';  // URL to web API

    constructor(private baseHttpService: BaseHttpService) {
        this.baseBackendUrl = baseHttpService.baseBackendUrl;
    }

    getParkingSpaceList(): Observable<string[]> {
        return this.baseHttpService.http.get(this.parkingSpacesResource)
            .map(this.extractData)
            .catch(this.baseHttpService.handleError);
    }

    private extractData(res: Response) {
        console.log('Response', res);
        const parkingSpaces = <string[]>res.json();
        console.log('history', [...parkingSpaces]);
        return parkingSpaces || {};
    }
}
