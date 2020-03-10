import { TestBed } from '@angular/core/testing';

import { ParkingAPIService } from './parking-api.service';

describe('ParkingAPIService', () => {
  let service: ParkingAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
