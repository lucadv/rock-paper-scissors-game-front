import { TestBed, inject } from '@angular/core/testing';

import { MatchResultsService } from './matchResults.service';

describe('MatchResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchResultsService]
    });
  });

  it('should be created', inject([MatchResultsService], (service: MatchResultsService) => {
    expect(service).toBeTruthy();
  }));
});
