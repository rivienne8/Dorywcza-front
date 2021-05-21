import {Component, Input, OnInit} from '@angular/core';
import {MapDisplayComponent} from '../map-display/map-display.component';
import {MatDialog} from '@angular/material/dialog';
import {OfferScheduleDTO} from '../../offers-page/offers-page_DTO/offer-schedule-DTO';
import {ScheduleDisplayComponent} from '../schedule-display/schedule-display.component';

@Component({
  selector: 'app-offer-view-buttons',
  templateUrl: './offer-view-buttons.component.html',
  styleUrls: ['./offer-view-buttons.component.css']
})
export class OfferViewButtonsComponent implements OnInit {
  @Input()
  offerLocationDTO?: {
    xposition: number;
    yposition: number;
  };

  @Input()
  offerScheduleDTO?: OfferScheduleDTO;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openMapPopUp(): void {
    this.matDialog.open(MapDisplayComponent, {
      panelClass: 'custom-dialog-container',
      data: this.offerLocationDTO
    });
  }

  openSchedulePopUp(): void {
    this.matDialog.open(ScheduleDisplayComponent, {
      panelClass: 'custom-dialog-container',
      data: this.offerScheduleDTO
    });
  }
}
