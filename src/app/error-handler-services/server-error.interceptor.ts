import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      // retry(1),

      catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // refresh token from session or
            return next.handle(req);  // pass the same type
          } else {
            return throwError(error);
          }
        })
      );
    }
  }



