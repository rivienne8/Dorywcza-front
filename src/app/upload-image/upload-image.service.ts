import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NotificationService} from '../error-handler-services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  path = environment.apiUrl;
  isUploadedStatus?: boolean;

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  postFile(imageToUpload: File, userId: number): void {
    const formData: FormData = new FormData();
    formData.append('image', imageToUpload, imageToUpload.name);
    formData.append('avatar', 'true');
    formData.append('userId', String(userId));
    this.http.post<Blob>(`${this.path}/upload`, formData )
      .subscribe(
        () => {
          this.notificationService.showSuccess('New avatar uploaded');
          location.reload();
        }
      );
  }

}
