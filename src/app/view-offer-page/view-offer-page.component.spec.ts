import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferPageComponent } from './view-offer-page.component';

describe('ViewOfferPageComponent', () => {
  let component: ViewOfferPageComponent;
  let fixture: ComponentFixture<ViewOfferPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOfferPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
