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
  breakpoint: number | undefined;

  @Input()
  userPublicDTO?: UserPublicDTO;

  constructor(private userPublicService: UserPublicProfileService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserById();
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
  }

  getUserById(): void{
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.userPublicService.getUserById(id)
      .subscribe(userDTO => this.userPublicDTO = userDTO);
  }

  onResize(event: any): void{
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

}
