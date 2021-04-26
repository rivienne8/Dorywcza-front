import {ImageDTO} from '../image-DTO';

export interface UserPublicDTO{
  id?: number;
  email: string;
  phoneNumber?: string;
  overallRating?: number;
  firstName?: string;
  lastName?: string;
  userName?: string;
  description?: string;
  street?: string;
  flatNumber?: string;
  zipCode?: number;
  city?: string;
  experienceDescription?: string;
  pictures?: ImageDTO[];
  avatar?: ImageDTO;
}
