import { TestBed } from '@angular/core/testing';

import { FireConfigService } from './fire-config.service';

describe('FireConfigService', () => {
  let service: FireConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
