import { TestBed } from '@angular/core/testing';

import { CRUSService } from './crus.service';

describe('CRUSService', () => {
  let service: CRUSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
