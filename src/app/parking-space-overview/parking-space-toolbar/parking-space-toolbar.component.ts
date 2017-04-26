import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parking-space-toolbar',
  templateUrl: './parking-space-toolbar.component.html',
  styleUrls: ['./parking-space-toolbar.component.css']
})
export class ParkingSpaceToolbarComponent{
  visible = true;
  @Input() connectionError = false;
  @Input() loading = false;
}
