/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { ParkingSpaceMapComponent } from './parking-space-map.component';
import { ParkingSpaceMapModule } from '../index';
import { AppRoutingModule } from '../../app-routing.module';

describe('ParkingSpaceMapComponent', () => {
  let component: ParkingSpaceMapComponent;
  let fixture: ComponentFixture<ParkingSpaceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ParkingSpaceMapModule, AppRoutingModule],
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
