import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../offers-page_DTO/offerDTO';
import {ListDetailOfferService} from './list-detail-offer.service';
import {PageEvent} from '@angular/material/paginator';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-list-detail-offer',
  templateUrl: './list-detail-offer.component.html',
  styleUrls: ['./list-detail-offer.component.css']
})
export class ListDetailOfferComponent implements OnInit {

  @Input()
  industryId?: number;

  offersDTO: OfferDTO[] = [];
  totalElements = 0;
  sampleOfferDTO?: OfferDTO;


  constructor(private listDetailOfferService: ListDetailOfferService) { }

  ngOnInit(): void {
    if (!this.industryId){
      this.getServiceOffersPagination(0, 10);
    } else {
      this.getServiceOffersPaginationForIndustry(this.industryId, 0, 10);
    }


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

  getServiceOffersPaginationForIndustry(industryId: number, page: number, size: number): void {
    this.listDetailOfferService.getOffersForIndustry(location.pathname, industryId.toString(), page.toString(), size.toString())
      .subscribe(serviceOfferDTO => {
        this.offersDTO = serviceOfferDTO.content;
        this.totalElements = serviceOfferDTO.totalElements;
        this.sampleOfferDTO = this.offersDTO[0];
      });
  }
}
