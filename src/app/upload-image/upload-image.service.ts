import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NotificationService} from '../shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  path = environment.apiUrl;
  isUploadedStatus?: boolean;

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

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

}
