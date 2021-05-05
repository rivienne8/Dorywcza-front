import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../../offers-page/offers-page_DTO/offerDTO';

@Component({
  selector: 'app-industry-headline',
  templateUrl: './industry-headline.component.html',
  styleUrls: ['./industry-headline.component.css']
})
export class IndustryHeadlineComponent implements OnInit {

  @Input()
  offerDTO?: OfferDTO;

  constructor() {
  }

  ngOnInit(): void {
  }

}
