import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../../offers-page/offers-page_DTO/offerDTO';

@Component({
  selector: 'app-brief-offer',
  templateUrl: './brief-offer.component.html',
  styleUrls: ['./brief-offer.component.css']
})

export class BriefOfferComponent implements OnInit {

  @Input()
  offerDTO?: OfferDTO;
  jobOffersDTO?: OfferDTO;

  constructor() { }

  ngOnInit(): void {
  }
}

