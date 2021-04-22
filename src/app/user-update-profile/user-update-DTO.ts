export class UserUpdateDTO {
  id?: number;
  email?: string;
  phoneNumber?: string;
  overallRating?: number;
  firstName?: string;
  lastName?: string;
  userName?: string;
  description?: string;
  street?: string;
  experienceDescription?: string;


  public constructor(init?: Partial<UserUpdateDTO>) {
    Object.assign(this, init);
  }

}
