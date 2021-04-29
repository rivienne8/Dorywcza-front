import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from '../shared/services/location.service';
import {ListDetailOfferService} from '../offers-page/list-detail-offer/list-detail-offer.service';
import {ActivatedRoute} from '@angular/router';
import {OfferDTO} from '../offers-page/offers-page_DTO/offerDTO';

@Component({
  selector: 'app-view-offer-page',
  templateUrl: './view-offer-page.component.html',
  styleUrls: ['./view-offer-page.component.css']
})
export class ViewOfferPageComponent implements OnInit {
  @Input()
  offerDTO?: OfferDTO;

  constructor(private locationService: LocationService,
              private listDetailOfferService: ListDetailOfferService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOffer();
  }

  getOffer(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.listDetailOfferService.getOffer(id, location.pathname).subscribe(offerDTO => this.offerDTO = offerDTO);
  }
}
