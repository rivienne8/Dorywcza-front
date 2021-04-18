import { Component, OnInit } from '@angular/core';
import {OfferDTO} from '../../offers-page/offers-page_DTO/offerDTO';
import {UserSimplifiedDTO} from '../../head/user-simplified-DTO';
import {SalaryTimeUnitDTO} from '../../offers-page/offers-page_DTO/salary-time-unit-DTO';
import {SalaryDTO} from '../../offers-page/offers-page_DTO/salary-DTO';
import {OfferLocationDTO} from '../../offers-page/offers-page_DTO/offer-location-DTO';
import {DateRangeDTO} from '../../offers-page/offers-page_DTO/date-range-DTO';
import {IndustryDTO} from '../../offers-page/offers-page_DTO/industry-DTO';
import {OfferScheduleDTO} from '../../offers-page/offers-page_DTO/offer-schedule-DTO';
import {OfferTest} from './offer-test';

@Component({
  selector: 'app-brief-offer',
  templateUrl: './brief-offer.component.html',
  styleUrls: ['./brief-offer.component.css']
})



export class BriefOfferComponent implements OnInit {

  offer: OfferTest[] = [{
    id: 5,
    title: `name 1`,
  }, {
    id: 3,
    title: 'name 2'
  }, {
    id: 1,
    title: 'name 3'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

