/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialDesignModule } from '../../material-design/';

import { ParkingSpaceInfoComponent } from './parking-space-info.component';

describe('ParkingSpaceInfoComponent', () => {
  let component: ParkingSpaceInfoComponent;
  let fixture: ComponentFixture<ParkingSpaceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDesignModule],
      declarations: [ParkingSpaceInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
