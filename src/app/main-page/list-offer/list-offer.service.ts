import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {OfferResponseDTO} from '../../offers-page/offers-page_DTO/offer-response-DTO';


@Injectable({
  providedIn: 'root'
})
export class ListOfferService {

  constructor(private http: HttpClient) { }

  getServiceOffers(pathName: string): Observable<OfferResponseDTO> {
    const params = {page: '0', size: '3'};
    return this.http.get<OfferResponseDTO>(`${environment.apiUrl}/service-offers`, {params});
  }

  getJobOffers(pathName: string): Observable<OfferResponseDTO> {
    const params = {page: '0', size: '3'};
    return this.http.get<OfferResponseDTO>(`${environment.apiUrl}/jobs`, {params});
  }
}
