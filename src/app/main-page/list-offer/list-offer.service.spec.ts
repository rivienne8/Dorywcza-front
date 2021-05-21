import { TestBed } from '@angular/core/testing';

import { ListOfferService } from './list-offer.service';

describe('ListOfferService', () => {
  let service: ListOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
