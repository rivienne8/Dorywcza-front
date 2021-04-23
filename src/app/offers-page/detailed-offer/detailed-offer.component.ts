import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../offers-page_DTO/offerDTO';

@Component({
  selector: 'app-detailed-offer',
  templateUrl: './detailed-offer.component.html',
  styleUrls: ['./detailed-offer.component.css']
})
export class DetailedOfferComponent implements OnInit {
  @Input()
  offerDTO?: OfferDTO;
  loc = location.pathname;

  constructor() { }

  ngOnInit(): void {
  }

}
