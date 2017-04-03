import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HistoryCollection, HistoryData } from '../models/history-collection.model';

@Injectable()
export class HistoryService {
    private historyUrl = 'https://remote.glenng.no:3006/history';  // URL to web API

    constructor(private http: Http) { }

    getHistory(parkingSpaceName: string): Observable<HistoryCollection> {
        return this.http.get(this.historyUrl + '/' + parkingSpaceName)
            .map(this.extractData)
            .map((history: HistoryData[]) => this.toHistoryCollection(parkingSpaceName, history))
            .catch(this.handleError);
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
    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
