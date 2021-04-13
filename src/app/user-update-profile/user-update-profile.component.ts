import {Component, Input, OnInit} from '@angular/core';
import {UserUpdateProfileService} from './user-update-profile.service';
import {ActivatedRoute} from '@angular/router';
import {UserUpdateDTO} from './user-update-DTO';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-update-profile.component.html',
  styleUrls: ['./user-update-profile.component.css']
})
export class UserUpdateProfileComponent implements OnInit {

  @Input()
  userUpdateDTO?: UserUpdateDTO;

  constructor(private userProfileService: UserUpdateProfileService,
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
