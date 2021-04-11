import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailOfferComponent } from './list-detail-offer.component';

describe('ListDetailOfferComponent', () => {
  let component: ListDetailOfferComponent;
  let fixture: ComponentFixture<ListDetailOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
