/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoCircleColorService } from './info-circle-color.service';

describe('Service: InfoCircleColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoCircleColorService]
    });
  });

  it('should return red color when free space percentage is 0', inject([InfoCircleColorService], (service: InfoCircleColorService) => {
    expect(service.getColor(1,1)).toBe('red');
  }));

  it('should return yellow color when free space percentage is 20', inject([InfoCircleColorService], (service: InfoCircleColorService) => {
    expect(service.getColor(8,10)).toBe('yellow');
  }));

  it('should return blue color when free space percentage is 21', inject([InfoCircleColorService], (service: InfoCircleColorService) => {
    expect(service.getColor(79,100)).toBe('blue');
  }));

  it('should return blue color when free space percentage is 50', inject([InfoCircleColorService], (service: InfoCircleColorService) => {
    expect(service.getColor(50,100)).toBe('blue');
  }));

  it('should return blue color when free space percentage is 90', inject([InfoCircleColorService], (service: InfoCircleColorService) => {
    expect(service.getColor(10,100)).toBe('blue');
  }));
});