import { Observable } from 'rxjs/Observable';

export interface GetParkingSpaceList {
    getParkingSpaceList(): Observable<string[]>;
}
