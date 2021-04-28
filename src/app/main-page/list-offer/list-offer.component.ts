import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../../offers-page/offers-page_DTO/offerDTO';
import {ListOfferService} from './list-offer.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {

  @Input()
  offersDTO: OfferDTO[] = [];
  jobOffersDTO: OfferDTO[] = [];

  constructor(private listOfferService: ListOfferService) { }

  ngOnInit(): void {
    this.getServiceOffers();
    this.getJobOffers();
   }

  getServiceOffers(): void {
    this.listOfferService.getServiceOffers(`${environment.apiUrl}/service-offers`)
      .subscribe(serviceOffersDTO => this.offersDTO = serviceOffersDTO);
  }

  getJobOffers(): void {
    this.listOfferService.getJobOffers(`${environment.apiUrl}/jobs`)
      .subscribe(serviceOffersDTO => this.jobOffersDTO = serviceOffersDTO);
  }
}
