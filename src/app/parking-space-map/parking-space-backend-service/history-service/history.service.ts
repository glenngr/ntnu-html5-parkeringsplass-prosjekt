import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HistoryCollection, HistoryData } from '../../models/history-collection.model';
import { GetHistory } from './history.service.interface';
import { BaseHttpService } from '../base-http.service';

@Injectable()
export class HistoryService implements GetHistory {
    private baseBackendUrl: string;
    private historyResource = this.baseBackendUrl + 'history';  // URL to web API

    constructor(private baseHttpService: BaseHttpService) {
        this.baseBackendUrl = baseHttpService.baseBackendUrl;
    }
    getHistory(parkingSpaceName: string): Observable<HistoryCollection> {
        return this.baseHttpService.http.get(this.historyResource + '/' + parkingSpaceName)
            .map(this.extractData)
            .map((history: HistoryData[]) => this.toHistoryCollection(parkingSpaceName, history))
            .catch(this.baseHttpService.handleError);
    }

    private toHistoryCollection(parkingSpaceName: string, history: HistoryData[]) {
        const hist = new HistoryCollection(parkingSpaceName, history);
        console.log(hist);
        return hist;
    }

    private extractData(res: Response) {
        console.log('Response', res);
        const history = <HistoryData[]>res.json();
        console.log('history', [...history]);
        return history || {};
    }
}
