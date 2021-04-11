import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersButtonsComponent } from './offers-buttons.component';

describe('OffersButtonsComponent', () => {
  let component: OffersButtonsComponent;
  let fixture: ComponentFixture<OffersButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
