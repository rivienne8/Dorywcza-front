import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryHeadlineComponent } from './industry-headline.component';

describe('IndustryHeadlineComponent', () => {
  let component: IndustryHeadlineComponent;
  let fixture: ComponentFixture<IndustryHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryHeadlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
