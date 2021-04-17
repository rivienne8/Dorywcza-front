import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from './offers-page_DTO/offerDTO';
import {OffersPageService} from './offers-page.service';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.css']
})
export class OffersPageComponent implements OnInit {

  @Input()
  serviceOffersDTO: OfferDTO[] = [];

  constructor(private offerPageService: OffersPageService) { }

  ngOnInit(): void {
    this.getServiceOffers();
  }

  getServiceOffers(): void {
    this.offerPageService.getServiceOffers().subscribe(serviceOffersDTO => this.serviceOffersDTO = serviceOffersDTO);
  }

}
