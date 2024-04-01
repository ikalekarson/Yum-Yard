import { TestBed } from '@angular/core/testing';

import { FriesService } from './fries.service';

describe('FriesService', () => {
  let service: FriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
