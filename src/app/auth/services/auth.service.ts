import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {LoginData} from '../models/login-data';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser = '';

  constructor(private http: HttpClient) {}

  register(user: { password: any; phoneNumber: any; passwordRepeat: any; username: any }): Observable<boolean> {
    return this.http.post<any>(`${environment.apiUrl}/register`, user)
      .pipe(
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${environment.apiUrl}/login`, user)
      .pipe(
        tap((data: LoginData) => this.doLoginUser(data.username, data.jwtToken)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    return this.http.post<any>(`${environment.apiUrl}/logout`, {}).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        this.doLogoutUser();
        alert(error.error);
        return of(false);
      }));
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, token: string) {
    this.loggedUser = username;
    this.storeToken(token);
  }

  private doLogoutUser() {
    this.loggedUser = '';
    this.removeToken();
  }

  private storeToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  private removeToken() {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
