import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebSocketService } from 'angular2-websocket-service';

import { ParkingSpace } from '../models/parkingspace.model';

@Injectable()
export class ParkingSpaceWebsocketService {
    public outputStream: Observable<any>;
    private inputStream: Observable<any> = new Observable<any>();

    constructor(private socketFactory: WebSocketService) { }
    public connect() {
        if (this.outputStream) {
            return this.outputStream;
        }

        // Using share() causes a single websocket to be created when the first
        // observer subscribes. This socket is shared with subsequent observers
        // and closed when the observer count falls to zero.
        return this.outputStream = this.socketFactory.connect(
            'ws://127.0.0.1:3006/',
            this.inputStream
        ).share();
    }
}
