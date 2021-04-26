import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorDTO} from './error-DTO';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  message?: string;


  constructor() { }

  getErrorMessage(error: Error): string {
    if (!navigator.onLine){
      return 'Brak połączenia z internetem';
    }

    return error.message ? error.message : error.toString();
  }

  getErrorStack(error: Error): string {
    return error.stack as string;
  }

  getErrorDTOMessage(error: HttpErrorResponse): string {
    if (error.status === 0){
      this.message = 'Dane chwilowo niedostępne';
    } else {
      const errorFromBackend: ErrorDTO = error.error;
      this.message = 'level: ' + errorFromBackend.level
        + ', message: ' + errorFromBackend.message;
    }

    return navigator.onLine ? this.message : 'Brak połączenia z internetem';
  }

  getServerStack(error: HttpErrorResponse): string {
    return 'stack from error : ' +  this.getErrorStack(error);
  }
}
