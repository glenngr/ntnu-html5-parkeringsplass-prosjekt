import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parking-space-toolbar',
  templateUrl: './parking-space-toolbar.component.html',
  styleUrls: ['./parking-space-toolbar.component.css']
})
export class ParkingSpaceToolbarComponent implements OnInit {
  visible = true;

  constructor() { }

  ngOnInit() {
  }

}
