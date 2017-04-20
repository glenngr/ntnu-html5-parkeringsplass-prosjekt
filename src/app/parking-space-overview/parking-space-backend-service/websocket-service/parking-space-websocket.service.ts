import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import websocketConnect from 'rxjs-websockets';

import { ParkingSpace } from '../../models/parkingspace.model';

const serverUrl = 'wss://remote.glenng.no:3006/';

@Injectable()
export class ParkingSpaceWebsocketService {
    public messages: Observable<ParkingSpace[]>;
    private inputStream: Subject<any>;

    constructor() { }
    public connect() {
        if (this.messages) {
            return;
        }

        // Using share() causes a single websocket to be created when the first
        // observer subscribes. This socket is shared with subsequent observers
        // and closed when the observer count falls to zero.
        this.messages = websocketConnect(
            serverUrl,
            this.inputStream = new Subject<any>()
        ).messages.share();
    }
}
