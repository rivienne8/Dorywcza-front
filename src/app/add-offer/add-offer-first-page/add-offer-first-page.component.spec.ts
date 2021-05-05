import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferFirstPageComponent } from './add-offer-first-page.component';

describe('AddOfferFirstPageComponent', () => {
  let component: AddOfferFirstPageComponent;
  let fixture: ComponentFixture<AddOfferFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfferFirstPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfferFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
