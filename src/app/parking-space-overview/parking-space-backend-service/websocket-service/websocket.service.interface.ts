import { Observable } from 'rxjs/Observable';
import { ParkingSpace } from '../../models/parkingspace.model';

export interface WebsocketConnect {
    connect();
}

export interface WebsocketMessages {
    messages: Observable<ParkingSpace[]>;
}