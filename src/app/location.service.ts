import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  geocoder: google.maps.Geocoder;

  constructor() {
    this.geocoder = new google.maps.Geocoder();
  }

  geocodeLatLng(position: { lng: number; lat: number }): void {
    this.geocoder.geocode(
      { location: position },
      (
        results,
        status
      ) => {
        if (status === 'OK') {
          if (results[0]) {
            console.log(results[0].formatted_address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );

  }
}
