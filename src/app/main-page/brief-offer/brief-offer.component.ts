import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-brief-offer',
  templateUrl: './brief-offer.component.html',
  styleUrls: ['./brief-offer.component.css']
})
export class BriefOfferComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Tytuł oferty', cols: 3, rows: 1, color: 'lightgray'},
    {text: 'użytkownik', cols: 1, rows: 2, color: 'lightgray'},
    {text: '800 zł', cols: 1, rows: 1, color: 'lightgray'},
    {text: 'Miejscowość', cols: 2, rows: 1, color: 'lightgray'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

