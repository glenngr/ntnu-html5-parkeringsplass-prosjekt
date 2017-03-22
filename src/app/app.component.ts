import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Oversikt over parkeringsplasser';
  lat: number = 58.145975;
  lng: number = 7.985508;
}
