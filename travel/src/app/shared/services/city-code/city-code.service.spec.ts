import { TestBed } from '@angular/core/testing';

import { CityCodeService } from './city-code.service';

describe('CityCodeService', () => {
  let service: CityCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
