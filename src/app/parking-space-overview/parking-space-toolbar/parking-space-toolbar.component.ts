import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parking-space-toolbar',
  templateUrl: './parking-space-toolbar.component.html',
  styleUrls: ['./parking-space-toolbar.component.scss']
})
export class ParkingSpaceToolbarComponent{
  visible = true;
  @Input() connectionError = false;
  @Input() loading = false;
}
