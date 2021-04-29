import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {OfferScheduleDTO} from '../../offers-page/offers-page_DTO/offer-schedule-DTO';

@Component({
  selector: 'app-schedule-display',
  templateUrl: './schedule-display.component.html',
  styleUrls: ['./schedule-display.component.css']
})
export class ScheduleDisplayComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public offerScheduleDTO: OfferScheduleDTO) { }

  ngOnInit(): void {
  }

}
