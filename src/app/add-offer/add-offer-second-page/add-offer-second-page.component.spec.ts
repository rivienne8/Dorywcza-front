import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferSecondPageComponent } from './add-offer-second-page.component';

describe('AddOfferSecondPageComponent', () => {
  let component: AddOfferSecondPageComponent;
  let fixture: ComponentFixture<AddOfferSecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfferSecondPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfferSecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
