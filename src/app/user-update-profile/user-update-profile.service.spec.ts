import { TestBed } from '@angular/core/testing';

import { UserUpdateProfileService } from './user-update-profile.service';

describe('UserProfileService', () => {
  let service: UserUpdateProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUpdateProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
