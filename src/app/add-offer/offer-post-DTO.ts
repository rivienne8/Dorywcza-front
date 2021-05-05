import {SalaryTimeUnitDTO} from '../offers-page/offers-page_DTO/salary-time-unit-DTO';
import {SalaryDTO} from '../offers-page/offers-page_DTO/salary-DTO';
import {OfferLocationDTO} from '../offers-page/offers-page_DTO/offer-location-DTO';
import {DateRangeDTO} from '../offers-page/offers-page_DTO/date-range-DTO';
import {IndustryDTO} from '../offers-page/offers-page_DTO/industry-DTO';
import {OfferScheduleDTO} from '../offers-page/offers-page_DTO/offer-schedule-DTO';

export interface OfferPostDTO {
  description: string;
  title: string;
  userId: number;
  salaryTimeUnitDTO: SalaryTimeUnitDTO;
  hasExperience: boolean;
  salaryDTO: SalaryDTO;
  offerLocationDTO: OfferLocationDTO;
  dateRangeDTO: DateRangeDTO;
  industryDTO: IndustryDTO;
  offerScheduleDTO: OfferScheduleDTO;
  tagsNames?: string[];
  dataCreated: string;
  dateUpdated: string;

}
