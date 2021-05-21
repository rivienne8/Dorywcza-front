import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OfferDTO} from '../../offers-page/offers-page_DTO/offerDTO';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListOfferService {

  constructor(private http: HttpClient) { }

  getServiceOffers(pathName: string): Observable<OfferDTO[]> {
    return this.http.get<OfferDTO[]>(`${environment.apiUrl}/service-offers`);
  }

  getJobOffers(pathName: string): Observable<OfferDTO[]> {
    return this.http.get<OfferDTO[]>(`${environment.apiUrl}/jobs`);
  }
}
