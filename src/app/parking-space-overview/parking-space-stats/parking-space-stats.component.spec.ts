/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { ParkingSpaceOverviewModule } from '../index';

import { ParkingSpaceStatsComponent } from './parking-space-stats.component';
import { ParkingSpaceStatsModule } from './';
import { ParkingSpaceBackendModule } from '../parking-space-backend-service/';
import { HelpAboutModule } from '../../help-about';
import { NotFound404Component } from '../../not-found-404/not-found-404.component';

describe('ParkingSpaceStatsComponent', () => {
  let component: ParkingSpaceStatsComponent;
  let fixture: ComponentFixture<ParkingSpaceStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ParkingSpaceStatsModule,
        ParkingSpaceBackendModule,
        AppRoutingModule,
        ParkingSpaceOverviewModule,
        HelpAboutModule
      ],
      declarations: [ NotFound404Component],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpaceStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
