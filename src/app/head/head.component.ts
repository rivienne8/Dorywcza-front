import {Component, Input, OnInit} from '@angular/core';
import {UserSimplifiedDTO} from './user-simplified-DTO';
import {HeadService} from './head.service';
import {ActivatedRoute} from '@angular/router';
import {UserUpdateDTO} from '../user-update-profile/user-update-DTO';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  path = environment.apiUrl;

  @Input()
  userDTO?: UserSimplifiedDTO;

  constructor(private headService: HeadService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUserDTOById(1);
  }

  private getUserDTOById(id: number): void {
    this.headService.getSimplifiedDTO(id).subscribe(userDTO => this.userDTO = userDTO);
  }
}
