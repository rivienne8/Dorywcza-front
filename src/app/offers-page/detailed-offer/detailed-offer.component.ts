import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../offers-page_DTO/offerDTO';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-detailed-offer',
  templateUrl: './detailed-offer.component.html',
  styleUrls: ['./detailed-offer.component.css']
})
export class DetailedOfferComponent implements OnInit {
  @Input()
  offerDTO?: OfferDTO;
  loc = location.pathname;
  // changed to be able use this component from other locations
  @Input()
  passedLoc = '';
  constructor() { }

  ngOnInit(): void {
    if (this.loc !== '/jobs' && this.loc !== '/service-offers'){
      this.loc = this.passedLoc;
    }
  }

}
