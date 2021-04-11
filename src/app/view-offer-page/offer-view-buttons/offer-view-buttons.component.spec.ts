import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferViewButtonsComponent } from './offer-view-buttons.component';

describe('OfferViewButtonsComponent', () => {
  let component: OfferViewButtonsComponent;
  let fixture: ComponentFixture<OfferViewButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferViewButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferViewButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
