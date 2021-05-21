export interface UserUpdateDTO {
  id: number;
  email: string;
  phone_number: string;
  overallRating?: number;
  first_name?: string;
  last_name?: string;
  user_name?: string;
  description?: string;
  street?: string;
  experienceDescription?: string;
}
