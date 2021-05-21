import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserPublicDTO} from './user-public-DTO';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserPublicProfileService {

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<UserPublicDTO>{
    const params = new HttpParams()
      .set('type', 'public');
    return this.http.get<UserPublicDTO>(`${environment.apiUrl}/users/${id}`, {params});
  }
}
