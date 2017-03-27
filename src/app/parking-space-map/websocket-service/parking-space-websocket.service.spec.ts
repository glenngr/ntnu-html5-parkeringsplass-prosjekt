/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { WebSocketService } from 'angular2-websocket-service';

import { ParkingSpaceWebsocketService } from './parking-space-websocket.service';

describe('Service: ParkingSpaceWebsocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingSpaceWebsocketService, WebSocketService]
    });
  });

  it('should ...', inject([ParkingSpaceWebsocketService], (service: ParkingSpaceWebsocketService) => {
    expect(service).toBeTruthy();
  }));
});
