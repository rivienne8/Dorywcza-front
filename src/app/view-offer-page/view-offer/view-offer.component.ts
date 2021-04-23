import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../location.service';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {
  position = {lat: 42.361145, lng: -71.057083};
  observable?: string;
  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void {
    this.locationService.geocodeLatLng(this.position).forEach((results: google.maps.GeocoderResult[]) => {
      this.observable = results[0].formatted_address;
    } ).then(() => console.log('done'));
  }

}
