import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../offers-page_DTO/offerDTO';
import {ListDetailOfferService} from './list-detail-offer.service';

@Component({
  selector: 'app-list-detail-offer',
  templateUrl: './list-detail-offer.component.html',
  styleUrls: ['./list-detail-offer.component.css']
})
export class ListDetailOfferComponent implements OnInit {
  @Input()
  offersDTO: OfferDTO[] = [];

  constructor(private listDetailOfferService: ListDetailOfferService) { }

  ngOnInit(): void {
    this.getServiceOffers();
  }

  getServiceOffers(): void {
    this.listDetailOfferService.getServiceOffers(location.pathname).subscribe(serviceOffersDTO => this.offersDTO = serviceOffersDTO);
  }

}
