/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParkingSpaceTextTrendComponent } from './parking-space-text-trend.component';
import { ParkingSpaceOverviewModule } from '../../';

describe('ParkingSpaceTextTrendComponent', () => {
  let component: ParkingSpaceTextTrendComponent;
  let fixture: ComponentFixture<ParkingSpaceTextTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ParkingSpaceOverviewModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpaceTextTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
