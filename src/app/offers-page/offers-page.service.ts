import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OfferDTO} from './offers-page_DTO/offerDTO';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffersPageService {

  constructor(private http: HttpClient) { }

  getServiceOffers(): Observable<OfferDTO[]> {
    return this.http.get<OfferDTO[]>(`${environment.apiUrl}/service-offers`);
  }
}