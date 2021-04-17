import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      retry(1),
      // @ts-ignore
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // refresh token
          } else {
            return throwError(error);
          }
        })
      );
    }
  }
//     return new Observable((observer) => {
//       next.handle(req).subscribe(
//         (res: HttpResponse<any>) => {
//           if (res instanceof HttpResponse) {
//             observer.next(res);
//           }
//         },
//         (err: HttpErrorResponse) => {
//           console.error(err);
//         }
//       );
//     });
//   }
// }


