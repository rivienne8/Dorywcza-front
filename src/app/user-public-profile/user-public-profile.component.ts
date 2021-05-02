import {Component, OnInit} from '@angular/core';
import {UserPublicProfileService} from './user-public-profile.service';
import {ActivatedRoute} from '@angular/router';
import {UserPublicDTO} from './user-public-DTO';
import {environment} from '../../environments/environment';
import {NotificationService} from '../shared/services/notification.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-public-profile',
  templateUrl: './user-public-profile.component.html',
  styleUrls: ['./user-public-profile.component.css']
})
export class UserPublicProfileComponent implements OnInit {

  path = environment.apiUrl;
  userPublicDTO?: UserPublicDTO;

  constructor(private userPublicService: UserPublicProfileService,
              private route: ActivatedRoute,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.getUserById(id);
  }

  getUserById(id: number): void{
    this.userPublicService.getUserById(id)
      .subscribe(userDTO => this.userPublicDTO = userDTO);
  }

  deleteImage(event: MouseEvent ,  id: number): void {
    event.preventDefault();
    this.userPublicService.deleteImage(id)
      .subscribe(() => {
        this.notificationService.showSuccess('Zdjęcie usunięte');
      });
  }

}
