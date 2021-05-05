import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OfferLocationDTO} from '../../offers-page/offers-page_DTO/offer-location-DTO';
import {LocationService} from '../../shared/services/location.service';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent implements OnInit {
  zoom = 5;
  locationChosen = false;
  address?: string;


  constructor(public dialogRef: MatDialogRef<LocationMapComponent>,
              @Inject(MAT_DIALOG_DATA) public offerLocationDTO: OfferLocationDTO,
              private locationService: LocationService) {
  }

  ngOnInit(): void {
  }

  onChoseLocation(event: google.maps.MapMouseEvent): void {
    this.offerLocationDTO.xposition = event.latLng.lat();
    this.offerLocationDTO.yposition = event.latLng.lng();
    this.zoom = 12;
    this.locationChosen = true;

    this.locationService.geocodeLatLng({lat: this.offerLocationDTO.xposition, lng: this.offerLocationDTO.yposition})
      .subscribe(result => {
        console.log(result[0].address_components);
        this.offerLocationDTO.cityName = result[0].address_components[1].long_name;
        this.address = result[0].formatted_address;
      });


  }

  doAction(): void {
    this.dialogRef.close(this.offerLocationDTO);
  }

}
