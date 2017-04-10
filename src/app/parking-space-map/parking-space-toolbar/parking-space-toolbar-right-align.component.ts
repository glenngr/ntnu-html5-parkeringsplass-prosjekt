import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parking-space-toolbar-right-align',
    styleUrls: ['parking-space-toolbar.component.css'],
    template: `
    <ng-content></ng-content>
    `
})

export class ParkingSpaceToolbarRightAlignComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
