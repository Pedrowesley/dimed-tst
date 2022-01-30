import { TestBed } from '@angular/core/testing';

import { LinesBusService } from './lines.service';

describe('LinesBusService', () => {
  let service: LinesBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinesBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
