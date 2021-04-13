import { TestBed } from '@angular/core/testing';

import { UserPublicProfileService } from './user-public-profile.service';

describe('UserPublicProfileService', () => {
  let service: UserPublicProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPublicProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
