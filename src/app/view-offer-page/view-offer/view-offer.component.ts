import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../location.service';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {
  position = {lat: 42.361145, lng: -71.057083};

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationService.geocodeLatLng(this.position);
  }

}
