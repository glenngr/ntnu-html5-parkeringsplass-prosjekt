/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialDesignModule } from '../../material-design/';

import { ParkingSpaceLocationCircleComponent } from './parking-space-location-circle.component';
import { LocationCircleColorService } from './location-circle-color.service';
import { MapCircleWithInfoWindowComponent } from '../map-circle-with-info-window/map-circle-with-info-window.component';

import { AgmCoreModule, CircleManager, GoogleMapsAPIWrapper, InfoWindowManager, MarkerManager, MapsAPILoader } from '@agm/core';

describe('ParkingSpaceInfoCircleComponent', () => {
    let component: ParkingSpaceLocationCircleComponent;
    let fixture: ComponentFixture<ParkingSpaceLocationCircleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AgmCoreModule.forRoot(), MaterialDesignModule],
            declarations: [ParkingSpaceLocationCircleComponent, MapCircleWithInfoWindowComponent],
            providers: [CircleManager, GoogleMapsAPIWrapper, InfoWindowManager, MarkerManager, LocationCircleColorService, MapsAPILoader]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ParkingSpaceLocationCircleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
