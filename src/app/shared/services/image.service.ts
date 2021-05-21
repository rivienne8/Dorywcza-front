import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  path = environment.apiUrl;

  constructor(private http: HttpClient,
              private notificationService: NotificationService) { }

  postFile(imageToUpload: File, userId: number, avatarParamValue: string): void {
    const formData: FormData = new FormData();
    formData.append('image', imageToUpload, imageToUpload.name);
    formData.append('avatar', `${avatarParamValue}`);
    formData.append('userId', String(userId));
    this.http.post<Blob>(`${this.path}/upload`, formData )
      .subscribe(
        () => {
          this.notificationService.showSuccess('Zdjęcie zostało zapisane');
          location.reload();
        }
      );
  }

  deleteImage(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/resources/${id}`);
  }
}
