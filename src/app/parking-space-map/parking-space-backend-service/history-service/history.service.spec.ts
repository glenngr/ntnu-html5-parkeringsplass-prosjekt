/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HistoryService } from './history.service';
import { ParkingSpaceBackendModule } from '../';

describe('Service: History', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParkingSpaceBackendModule]
    });
  });

  it('should ...', inject([HistoryService], (service: HistoryService) => {
    expect(service).toBeTruthy();
  }));
});
