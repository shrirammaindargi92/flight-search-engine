import { TestBed, inject } from '@angular/core/testing';

import { FlightDataService } from './flight-data.service';

describe('FlightDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightDataService]
    });
  });

  it('should be created', inject([FlightDataService], (service: FlightDataService) => {
    expect(service).toBeTruthy();
  }));
});
