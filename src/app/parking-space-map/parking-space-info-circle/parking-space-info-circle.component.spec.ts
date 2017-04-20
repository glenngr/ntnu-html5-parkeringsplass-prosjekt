/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialDesignModule } from '../../material-design/';

import { ParkingSpaceInfoCircleComponent } from './parking-space-info-circle.component';
import { InfoCircleColorService } from './info-circle-color.service';
import { MapCircleWithInfoWindowComponent } from '../map-circle-with-info-window/map-circle-with-info-window.component';

import { AgmCoreModule, CircleManager, GoogleMapsAPIWrapper, InfoWindowManager, MarkerManager, MapsAPILoader } from '@agm/core';

describe('ParkingSpaceInfoCircleComponent', () => {
    let component: ParkingSpaceInfoCircleComponent;
    let fixture: ComponentFixture<ParkingSpaceInfoCircleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AgmCoreModule.forRoot(), MaterialDesignModule],
            declarations: [ParkingSpaceInfoCircleComponent, MapCircleWithInfoWindowComponent],
            providers: [CircleManager, GoogleMapsAPIWrapper, InfoWindowManager, MarkerManager, InfoCircleColorService, MapsAPILoader]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ParkingSpaceInfoCircleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
