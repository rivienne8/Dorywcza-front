import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<string[]> {

    return this.http.get<string[]>(`${environment.apiUrl}/users-update/${id}?toUpdate=true`);
  }
}
