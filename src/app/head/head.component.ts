import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  userName: string;
  id: number;


  constructor() {
    this.userName = "Witek";
    this.id = 2;

  }

  ngOnInit(): void {
  }

}
