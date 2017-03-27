/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParkingSpaceWebsocketService } from './parking-space-websocket.service';

describe('Service: ParkingSpaceWebsocket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingSpaceWebsocketService]
    });
  });

  it('should ...', inject([ParkingSpaceWebsocketService], (service: ParkingSpaceWebsocketService) => {
    expect(service).toBeTruthy();
  }));
});