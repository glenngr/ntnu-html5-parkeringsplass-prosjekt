/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParkingSpaceToolbarComponent } from './parking-space-toolbar.component';
import { ParkingSpaceToolbarModule } from './';

describe('ParkingSpaceToolbarComponent', () => {
  let component: ParkingSpaceToolbarComponent;
  let fixture: ComponentFixture<ParkingSpaceToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ParkingSpaceToolbarModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpaceToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
