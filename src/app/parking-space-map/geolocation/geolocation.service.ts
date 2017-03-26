import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Location } from './location';

@Injectable()
export class GeolocationService {
    private options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    constructor() { }

    getCurrentPosition(): Observable<Location> {
        return new Observable((observer: Observer<Location>) => {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    observer.next(new Location(pos.coords.latitude, pos.coords.longitude));
                    observer.complete();
                },
                (err) => {
                    console.log(err);
                    observer.error(err);
                },
                this.options
            );
        });
    }
}