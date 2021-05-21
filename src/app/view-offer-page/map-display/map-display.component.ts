import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {OfferLocationDTO} from '../../offers-page/offers-page_DTO/offer-location-DTO';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public offerLocationDTO: OfferLocationDTO) { }

  ngOnInit(): void {
  }

}
