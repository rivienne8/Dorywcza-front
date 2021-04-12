import {Component, Input, OnInit} from '@angular/core';
import {UserProfileService} from './user-profile.service';
import {ActivatedRoute} from '@angular/router';
import {UserUpdateDTO} from './user-update-DTO';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input()
  userUpdateDTO?: UserUpdateDTO;

  constructor(private userProfileService: UserProfileService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(): void{
    const id = +(this.route.snapshot.paramMap.get('id') || 0);  // how to make it not 'possible null'?

    this.userProfileService.getUserById(id)
      .subscribe(userDTO => this.userUpdateDTO = userDTO);
  }

}
