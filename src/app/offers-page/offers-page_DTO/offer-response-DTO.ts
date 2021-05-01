import {OfferDTO} from './offerDTO';

export interface OfferResponseDTO {
  content: OfferDTO[];
  totalElements: number;
}
