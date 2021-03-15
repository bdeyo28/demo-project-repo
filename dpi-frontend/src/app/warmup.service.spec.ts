import { TestBed } from '@angular/core/testing';

import { WarmupService } from './warmup.service';

describe('WarmupService', () => {
  let service: WarmupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarmupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
