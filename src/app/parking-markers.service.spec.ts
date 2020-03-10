import { TestBed } from '@angular/core/testing';

import { ParkingMarkersService } from './parking-markers.service';

describe('ParkingMarkersService', () => {
  let service: ParkingMarkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingMarkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
