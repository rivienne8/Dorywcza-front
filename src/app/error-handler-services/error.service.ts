import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  getClientMessage(error: Error): string {
    if (!navigator.onLine){
      return '(client) No Internet Connection';
    }
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
    return error.stack as string;
  }

  getServerMessage(error: HttpErrorResponse): string {
    return navigator.onLine ? error.message : '(server) No Internet Connection';
  }

  getServerStack(error: HttpErrorResponse): string {
    return 'stack from error : ';
  }
}
