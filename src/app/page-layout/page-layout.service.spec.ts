import { TestBed, inject } from '@angular/core/testing';

import { PageLayoutService } from './page-layout.service';

describe('PageLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageLayoutService]
    });
  });

  it('should be created', inject([PageLayoutService], (service: PageLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
