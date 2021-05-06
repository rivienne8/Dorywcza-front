import {Component, Input, OnInit} from '@angular/core';
import {UserPublicProfileService} from '../user-public-profile/user-public-profile.service';
import {UserPublicDTO} from '../user-public-profile/user-public-DTO';
import {environment} from '../../environments/environment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-accessible-profile',
  templateUrl: './user-accessible-profile.component.html',
  styleUrls: ['./user-accessible-profile.component.css']
})
export class UserAccessibleProfileComponent implements OnInit {

  path = environment.apiUrl;
  userPublicDTO?: UserPublicDTO;

  constructor(private userPublicService: UserPublicProfileService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = +(this.route.snapshot.paramMap.get('id') || 0);
    if (userId !== 0){
      this.getUserPublicDTO(userId);
    }
  }

  getUserPublicDTO(userId: number): void {
    this.userPublicService.getUserById(userId)
      .subscribe(userDTO => this.userPublicDTO = userDTO);
  }

}
