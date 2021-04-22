import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserUpdateDTO} from './user-update-DTO';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateProfileService {

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<UserUpdateDTO> {

    return this.http.get<UserUpdateDTO>(`${environment.apiUrl}/users/${id}?type=update`);
  }

  updateUserById(id: number, userDTO: UserUpdateDTO): void {
    this.http.put<UserUpdateDTO>(`${environment.apiUrl}/users/${id}`, userDTO)
      .subscribe(data => console.log(data));
  }
}
