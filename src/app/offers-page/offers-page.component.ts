import {Component, OnInit} from '@angular/core';
import {ListDetailOfferService} from './list-detail-offer/list-detail-offer.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.css']
})
export class OffersPageComponent implements OnInit {

  industryId?: number;

  constructor(private listDetailOfferService: ListDetailOfferService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIndustryId();
  }

  getIndustryId(): void {
    const param = 'industryId';
    this.route.queryParams.subscribe(
      params => {
        this.industryId =  params[param];
      });
  }

}
