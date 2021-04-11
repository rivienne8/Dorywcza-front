import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefOfferComponent } from './brief-offer.component';

describe('BriefOfferComponent', () => {
  let component: BriefOfferComponent;
  let fixture: ComponentFixture<BriefOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
