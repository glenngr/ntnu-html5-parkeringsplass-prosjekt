import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gg-map-circle-with-info-window',
  templateUrl: './map-circle-with-info-window.component.html',
  styleUrls: ['./map-circle-with-info-window.component.css']
})
export class MapCircleWithInfoWindowComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() infoWindowText: string;
  
  constructor() { }

  ngOnInit() {
  }

}