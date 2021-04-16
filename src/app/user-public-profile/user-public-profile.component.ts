import {Component, Input, OnInit} from '@angular/core';
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

  @Input()
  userPublicDTO?: UserPublicDTO;

  constructor(private userPublicService: UserPublicProfileService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(): void{
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.userPublicService.getUserById(id)
      .subscribe(userDTO => this.userPublicDTO = userDTO);
  }

}
