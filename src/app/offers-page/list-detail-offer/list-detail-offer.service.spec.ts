import { TestBed } from '@angular/core/testing';

import { ListDetailOfferService } from './list-detail-offer.service';

describe('ListDetailOfferService', () => {
  let service: ListDetailOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDetailOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
