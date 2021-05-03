import {Component, Input, OnInit} from '@angular/core';
import {ListDetailOfferService} from '../offers-page/list-detail-offer/list-detail-offer.service';
import {OfferDTO} from '../offers-page/offers-page_DTO/offerDTO';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.css']
})
export class UserOffersComponent implements OnInit {

  userId?: number;
  jobOffersDTO: OfferDTO[] = [];
  serviceOffersDTO: OfferDTO[] = [];

  constructor(private serviceOffersService: ListDetailOfferService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = +(this.route.snapshot.paramMap.get('userId') || 0);
    this.getJobOffers(this.userId);
    this.getServiceOffers(this.userId);


  }

  private getJobOffers(userId: number): void{
    this.serviceOffersService.getOffersForUserId('/jobs-user', userId.toString())
      .subscribe( serviceOfferDTO => {
        this.jobOffersDTO = serviceOfferDTO;
      });
  }

  private getServiceOffers(userId: number): void {
    this.serviceOffersService.getOffersForUserId('/service-offers', userId.toString())
      .subscribe(serviceOfferDTO => {
        this.serviceOffersDTO = serviceOfferDTO;
      });
  }
}
