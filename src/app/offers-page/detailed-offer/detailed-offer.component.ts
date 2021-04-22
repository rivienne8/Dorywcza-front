import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../offers-page_DTO/offerDTO';
import {LocationService} from '../../location.service';

@Component({
  selector: 'app-detailed-offer',
  templateUrl: './detailed-offer.component.html',
  styleUrls: ['./detailed-offer.component.css']
})
export class DetailedOfferComponent implements OnInit {
  @Input()
  offerDTO?: OfferDTO;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
  }

}
