import { TestBed, inject } from '@angular/core/testing';

import { ClientStateService } from './client-state.service';

describe('ClientStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientStateService]
    });
  });

  it('should be created', inject([ClientStateService], (service: ClientStateService) => {
    expect(service).toBeTruthy();
  }));
});
