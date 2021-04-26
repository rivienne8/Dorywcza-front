import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserSimplifiedDTO} from './user-simplified-DTO';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeadService {



  constructor(private http: HttpClient) { }

  getSimplifiedDTO(id: number): Observable<UserSimplifiedDTO> {
    const params = new HttpParams()
      .set('type', 'simplified');

    // return this.http.get<UserSimplifiedDTO>(`${environment.apiUrl}/users/${id}?type=simplified`);
    return this.http.get<UserSimplifiedDTO>(environment.apiUrl + '/users/' + id, {params});
  }
}
