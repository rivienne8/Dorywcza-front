import {Component, OnInit} from '@angular/core';
import {UserPublicProfileService} from './user-public-profile.service';
import {ActivatedRoute} from '@angular/router';
import {UserPublicDTO} from './user-public-DTO';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-user-public-profile',
  templateUrl: './user-public-profile.component.html',
  styleUrls: ['./user-public-profile.component.css']
})
export class UserPublicProfileComponent implements OnInit {

  path = environment.apiUrl;
  userPublicDTO?: UserPublicDTO;

  constructor(private userPublicService: UserPublicProfileService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.getUserById(id);
  }

  getUserById(id: number): void{
    this.userPublicService.getUserById(id)
      .subscribe(userDTO => this.userPublicDTO = userDTO);
  }

}
