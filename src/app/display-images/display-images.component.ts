import {Component, Input, OnInit} from '@angular/core';
import {NotificationService} from '../shared/services/notification.service';
import {ImageService} from '../shared/services/image.service';
import { environment } from 'src/environments/environment';
import {UserPublicProfileComponent} from '../user-public-profile/user-public-profile.component';
import {UserPublicDTO} from '../user-public-profile/user-public-DTO';


@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.css']
})
export class DisplayImagesComponent implements OnInit {

  environment = environment;
  @Input()
  userPublicDTO?: UserPublicDTO;

  constructor(private imageService: ImageService ,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  deleteImage(event: MouseEvent, id: number): void {
    event.preventDefault();
    this.imageService.deleteImage(id)
      .subscribe(() => {
        this.notificationService.showSuccess('Zdjęcie usunięte');
      });
  }

}
