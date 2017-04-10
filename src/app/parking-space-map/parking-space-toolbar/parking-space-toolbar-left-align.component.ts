import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parking-space-toolbar-left-align',
    template: `
    <ng-content></ng-content>
    `
})

export class ParkingSpaceToolbarLeftAlignComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
