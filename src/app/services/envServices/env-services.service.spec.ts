import { TestBed } from '@angular/core/testing';

import { EnvServicesService } from './env-services.service';

describe('EnvServicesService', () => {
  let service: EnvServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
