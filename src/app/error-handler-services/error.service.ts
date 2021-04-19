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
      return '(client) No Internet Connection';
    }

    return error.message ? error.message : error.toString();
  }

  getErrorStack(error: Error): string {
    return error.stack as string;
  }

  getErrorDTOMessage(error: HttpErrorResponse): string {

    const errorFromBackend: ErrorDTO = error.error;
    this.message = 'status: ' + errorFromBackend.status
      + ', htttp status: ' + errorFromBackend.httpStatus
      + ', level: ' + errorFromBackend.level
      + ', message: ' + errorFromBackend.message;
    return navigator.onLine ? this.message : '(server) No Internet Connection';
  }

  getServerStack(error: HttpErrorResponse): string {

    return 'stack from error : ';
  }
}
