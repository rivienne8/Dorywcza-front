import {Component, Input, OnInit} from '@angular/core';
import {UserProfileService} from './user-profile.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  details: string[];
  @Input()
  userUpdateDTO?: string[];

  constructor(private userProfileService: UserProfileService,
              private route: ActivatedRoute) {
    this.details =
      ['name', 'username', 'address'];
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(): void{
    // const ud = +this.route.snapshot.paramMap.get('id');
    // console.log(ud);
    const id = 2;
    this.userProfileService.getUserById(id)
      .subscribe(userDTO => this.userUpdateDTO = userDTO);
  }

  getDetails(): string[] {
    return this.details;
  }

}
