import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';

@Component({
  selector: 'app-map-circle-with-info-window',
  templateUrl: './map-circle-with-info-window.component.html',
  styleUrls: ['./map-circle-with-info-window.component.css']
})
export class MapCircleWithInfoWindowComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() infoWindowText: string;
  @Input() circleFillColor: string;
  @Input() circleRadius: number;
  @Input() infoWindowOpen: boolean;
  @Output() circleClick: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(SebmGoogleMapInfoWindow) infoWindow: SebmGoogleMapInfoWindow;

  constructor() { }

  onCircleClick() {
    this.infoWindow.open();
    this.infoWindowOpen = this.infoWindow.isOpen;
    this.circleClick.emit();
  }

  ngOnInit() {
  }
}
