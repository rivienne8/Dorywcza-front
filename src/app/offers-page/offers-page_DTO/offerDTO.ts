import {UserSimplifiedDTO} from '../../head/user-simplified-DTO';
import {SalaryTimeUnitDTO} from './salary-time-unit-DTO';
import {SalaryDTO} from './salary-DTO';
import {OfferLocationDTO} from './offer-location-DTO';
import {DateRangeDTO} from './date-range-DTO';
import {IndustryDTO} from './industry-DTO';
import {OfferScheduleDTO} from './offer-schedule-DTO';

export interface OfferDTO {
  id: number;
  description: string;
  title: string;
  userSimplifiedDTO: UserSimplifiedDTO;
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
