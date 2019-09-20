import { TestBed } from '@angular/core/testing';

import { WPAPIService } from './wpapi.service';

describe('WPAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WPAPIService = TestBed.get(WPAPIService);
    expect(service).toBeTruthy();
  });
});
