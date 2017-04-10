/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParkingSpaceBackendService } from './parking-space-backend.service';

describe('Service: ParkingSpaceBackend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingSpaceBackendService]
    });
  });

  it('should ...', inject([ParkingSpaceBackendService], (service: ParkingSpaceBackendService) => {
    expect(service).toBeTruthy();
  }));
});