import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../../offers-page/offers-page_DTO/offerDTO';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {
  path = environment.apiUrl;

  @Input()
  offerDTO?: OfferDTO;

  constructor() {
  }

  ngOnInit(): void {  }

}
