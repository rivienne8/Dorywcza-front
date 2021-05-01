import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../offers-page_DTO/offerDTO';
import {ListDetailOfferService} from './list-detail-offer.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-list-detail-offer',
  templateUrl: './list-detail-offer.component.html',
  styleUrls: ['./list-detail-offer.component.css']
})
export class ListDetailOfferComponent implements OnInit {
  @Input()
  offersDTO: OfferDTO[] = [];
  totalElements = 0;


  constructor(private listDetailOfferService: ListDetailOfferService) { }

  ngOnInit(): void {
    this.getServiceOffersPagination(0, 10);

  }

  getServiceOffersPagination(page: number, size: number): void {
    this.listDetailOfferService.getServiceOffersPagination(location.pathname, page.toString(), size.toString())
      .subscribe(serviceOfferDTO => {
        this.offersDTO = serviceOfferDTO.content;
        this.totalElements = serviceOfferDTO.totalElements;
      });
  }

  nextPage(event: PageEvent): void {
    this.getServiceOffersPagination(event.pageIndex, event.pageSize);
  }
}
