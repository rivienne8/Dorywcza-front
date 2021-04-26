import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../../offers-page/offers-page_DTO/offerDTO';
import {LocationService} from '../../location.service';
import {ListDetailOfferService} from '../../offers-page/list-detail-offer/list-detail-offer.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-brief-offer',
  templateUrl: './brief-offer.component.html',
  styleUrls: ['./brief-offer.component.css']
})


export class BriefOfferComponent implements OnInit {

  @Input()
  offerDTO?: OfferDTO;

  constructor(private listDetailOfferService: ListDetailOfferService,
              private route: ActivatedRoute) {

  }
  ngOnInit(): void {
  }
  getOffer(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.listDetailOfferService.getOffer(id, location.pathname).subscribe(offerDTO => this.offerDTO = offerDTO);
  }
}

