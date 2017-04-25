/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { ParkingSpaceMapComponent } from './parking-space-map.component';
import { ParkingSpaceOverviewModule } from '../index';
import { AppRoutingModule } from '../../app-routing.module';
import { HelpAboutModule } from '../../help-about';
import { NotFound404Component } from '../../not-found-404/not-found-404.component';

describe('ParkingSpaceMapComponent', () => {
  let component: ParkingSpaceMapComponent;
  let fixture: ComponentFixture<ParkingSpaceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ParkingSpaceOverviewModule, AppRoutingModule, HelpAboutModule],
      declarations: [NotFound404Component],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpaceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
