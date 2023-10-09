import { TestBed } from '@angular/core/testing';

import { DateComparisonService } from './date-comparison.service';

describe('DateComparisionService', () => {
  let service: DateComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateComparisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
