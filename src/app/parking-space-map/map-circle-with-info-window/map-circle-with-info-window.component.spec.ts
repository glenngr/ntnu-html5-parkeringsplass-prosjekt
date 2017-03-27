/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapCircleWithInfoWindowComponent } from './map-circle-with-info-window.component';
import { AgmCoreModule, CircleManager, GoogleMapsAPIWrapper, InfoWindowManager, MarkerManager } from 'angular2-google-maps/core';

describe('MapCircleWithInfoWindowComponent', () => {
  let component: MapCircleWithInfoWindowComponent;
  let fixture: ComponentFixture<MapCircleWithInfoWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgmCoreModule.forRoot()],
      declarations: [MapCircleWithInfoWindowComponent],
      providers: [CircleManager, GoogleMapsAPIWrapper, InfoWindowManager, MarkerManager]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCircleWithInfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});