/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParkingSpaceBackendService } from './parking-space-backend.service';
import { ParkingSpaceBackendModule } from '.';
describe('Service: ParkingSpaceBackend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParkingSpaceBackendModule]
    });
  });

  it('should ...', inject([ParkingSpaceBackendService], (service: ParkingSpaceBackendService) => {
    expect(service).toBeTruthy();
  }));
});
