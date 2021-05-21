import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserUpdateDTO} from './user-update-DTO';
import {NotificationService} from '../shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateProfileService {

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  getUserById(id: number): Observable<UserUpdateDTO> {
    const params = new HttpParams()
      .set('type', 'update');
    return this.http.get<UserUpdateDTO>(`${environment.apiUrl}/users/${id}`, {params});
  }

  updateUserById(id: number, userDTO: UserUpdateDTO): void {
    this.http.put<UserUpdateDTO>(`${environment.apiUrl}/users/${id}`, userDTO)
      .subscribe(() => {
        this.notificationService.showSuccess('Profil zaktualizowany');
      });
  }
}
