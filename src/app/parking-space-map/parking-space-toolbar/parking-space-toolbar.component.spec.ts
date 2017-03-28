/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
//import { MaterialModule } from '@anglar/material';

import { ParkingSpaceToolbarComponent } from './parking-space-toolbar.component';

fdescribe('ParkingSpaceToolbarComponent', () => {
  let component: ParkingSpaceToolbarComponent;
  let fixture: ComponentFixture<ParkingSpaceToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //imports: [MaterialModule],
      declarations: [ ParkingSpaceToolbarComponent ]
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
