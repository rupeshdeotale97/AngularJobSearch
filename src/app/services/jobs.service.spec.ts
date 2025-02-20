import { TestBed } from '@angular/core/testing';

import { JobsService } from './jobs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobsService', () => {
  let service: JobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
