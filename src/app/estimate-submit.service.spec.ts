import { TestBed } from '@angular/core/testing';

import { EstimateSubmitService } from './estimate-submit.service';

describe('EstimateSubmitService', () => {
  let service: EstimateSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimateSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
