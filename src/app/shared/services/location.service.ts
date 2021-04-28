import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  geocoder: google.maps.Geocoder;

  constructor() {
    this.geocoder = new google.maps.Geocoder();
  }

  geocodeLatLng(position: { lng: number; lat: number }): Observable<google.maps.GeocoderResult[]> {
    return new Observable((observer: Observer<google.maps.GeocoderResult[]>) => {
      this.geocoder.geocode({location: position},
        (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus
        ) => {
          if (status === google.maps.GeocoderStatus.OK) {
            observer.next(results);
            observer.complete();
          } else {
            console.log('Geocoding service: geocoder failed due to: ' + status);
            observer.error(status);
          }
        });
    });
  }
}
