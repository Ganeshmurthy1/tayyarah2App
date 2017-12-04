import { TestBed, inject } from '@angular/core/testing';

import { FlightServiceService } from './flight-service.service';

describe('FlightServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightServiceService]
    });
  });

  it('should be created', inject([FlightServiceService], (service: FlightServiceService) => {
    expect(service).toBeTruthy();
  }));
});
