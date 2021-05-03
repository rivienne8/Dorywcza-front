import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessibleProfileComponent } from './user-accessible-profile.component';

describe('UserAccessibleProfileComponent', () => {
  let component: UserAccessibleProfileComponent;
  let fixture: ComponentFixture<UserAccessibleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccessibleProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccessibleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
