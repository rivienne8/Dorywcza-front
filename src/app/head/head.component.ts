import {Component, OnInit} from '@angular/core';
import {UserSimplifiedDTO} from './user-simplified-DTO';
import {HeadService} from './head.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  title = 'dorywcza.pl';
  environment = environment;
  userDTO?: UserSimplifiedDTO;

  constructor(private headService: HeadService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUserDTOById(1); // for public user (not register user) change id to 0
  }

  private getUserDTOById(id: number): void {
    this.headService.getSimplifiedDTO(id).subscribe(userDTO => this.userDTO = userDTO);
  }
}
