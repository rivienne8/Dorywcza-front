import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffertComponent } from './list-offer.component';

describe('ListOffertComponent', () => {
  let component: ListOffertComponent;
  let fixture: ComponentFixture<ListOffertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOffertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOffertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
