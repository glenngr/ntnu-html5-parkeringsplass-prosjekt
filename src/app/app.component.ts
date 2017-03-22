import { Component } from '@angular/core';

import { GeolocationService } from './geolocation/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Oversikt over parkeringsplasser';
  lat: number = 58.145975;
  lng: number = 7.985508;

  constructor(private geoLocationService: GeolocationService) { }

  onButtonClick() {
    this.geoLocationService.getCurrentPosition().subscribe((pos) => {
        this.lat = pos.lat;
        this.lng = pos.long;
    });
  }
}
