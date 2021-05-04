import {Component, Input, OnInit} from '@angular/core';
import {ListDetailOfferService} from '../../offers-page/list-detail-offer/list-detail-offer.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent{

  @Input()
  userId?: number;
  myOffersButtonValue = 'MOJE OFERTY';
  matchedOffersButtonValue = 'OFERTY DOPASOWANE';

  constructor() { }

}
