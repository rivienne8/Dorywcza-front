import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IndustryDTO} from '../../offers-page/offers-page_DTO/industry-DTO';

@Component({
  selector: 'app-industry-headline',
  templateUrl: './industry-headline.component.html',
  styleUrls: ['./industry-headline.component.css']
})
export class IndustryHeadlineComponent implements OnInit, OnChanges {

  @Input()
  industryDTO?: IndustryDTO;
  industries: IndustryDTO[] = [];
  kindOfOffer?: string;
  industrySector?: string;

  constructor() {

  }

  ngOnInit(): void {

    if (this.industryDTO){
      this.getIndustries(this.industryDTO);
    }
    this.adjustProperties();

  }

  ngOnChanges() {
    if (this.industryDTO){
      this.getIndustries(this.industryDTO);
    }
    this.adjustProperties();
  }

  adjustProperties(){
    if (location.pathname.includes('jobs')){
      this.kindOfOffer = 'jobs';
      this.industrySector = 'Oferty pracy';
    } else if (location.pathname.includes('service-offers')){
      this.kindOfOffer = 'service-offers';
      this.industrySector = 'Oferty usług';
    }
  }

  getIndustries(industryDTO: IndustryDTO): void{
    this.industries = [];
    let currentIndustryDTO = industryDTO;
    this.industries.push(currentIndustryDTO);

    while (currentIndustryDTO.parentIndustryDTO){
      const parentIndustryDTO = currentIndustryDTO.parentIndustryDTO;
      this.industries.unshift(parentIndustryDTO);
      currentIndustryDTO = parentIndustryDTO;
    }
  }

}
