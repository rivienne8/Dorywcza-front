import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OfferDTO} from '../offers-page_DTO/offerDTO';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {LocationService} from '../../location.service';

@Injectable({
  providedIn: 'root'
})
export class ListDetailOfferService {

  constructor(private http: HttpClient, private locationService: LocationService) { }

  getServiceOffers(pathName: string): Observable<OfferDTO[]> {
    return this.http.get<OfferDTO[]>(`${environment.apiUrl}${pathName}`)
      .pipe(tap(offerDTO => offerDTO.forEach(offer =>
        this.locationService.geocodeLatLng({lat: offer.offerLocationDTO.xposition, lng: offer.offerLocationDTO.yposition}).
      forEach((results: google.maps.GeocoderResult[]) => {
        offer.fullAddress = results[0].formatted_address;
        offer.cityName = results[0].address_components[3].long_name;
      } ).then(() => console.log('done')))));
  }
}
