import { TestBed } from '@angular/core/testing';

import { InterchangeService } from './interchange.service';

describe('InterchangeService', () => {
  let service: InterchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
