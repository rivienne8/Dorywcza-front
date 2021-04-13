import {ImageDTO} from '../image-DTO';

export interface UserSimplifiedDTO{
  id: number;
  email: string;
  overallRating?: number;
  userName?: string;
  avatar?: ImageDTO;

}
