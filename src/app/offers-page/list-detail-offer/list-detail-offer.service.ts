import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OfferDTO} from '../offers-page_DTO/offerDTO';
import {environment} from '../../../environments/environment';
import {OfferResponseDTO} from '../offers-page_DTO/offer-response-DTO';

@Injectable({
  providedIn: 'root'
})
export class ListDetailOfferService {

  constructor(private http: HttpClient) { }


  getOffer(id: number, pathName: string): Observable<OfferDTO> {
    return this.http.get<OfferDTO>(`${environment.apiUrl}${pathName}`);
  }

  getServiceOffersPagination(pathName: string, page: string, size: string): Observable<OfferResponseDTO> {
    const params = {page, size};
    return this.http.get<OfferResponseDTO>(`${environment.apiUrl}${pathName}`, {params});

  }

  getOffersForUserId(pathName: string, userId: string): Observable<OfferDTO[]>{
    const params = {userId};
    return this.http.get<OfferDTO[]>(`${environment.apiUrl}${pathName}`, {params});
  }

}
