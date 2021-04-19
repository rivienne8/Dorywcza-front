
export interface ErrorDTO{
  status: string;
  httpStatus: number;
  message?: string;
  level?: string;
  errors?: string[];

}
