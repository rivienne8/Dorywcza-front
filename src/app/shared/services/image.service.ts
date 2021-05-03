import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  deleteImage(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/resources/${id}`);
  }
}
