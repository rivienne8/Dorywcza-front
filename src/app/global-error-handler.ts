import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorService} from './error-handler-services/error.service';
import {LoggingService} from './error-handler-services/logging.service';
import {NotificationService} from './error-handler-services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

  constructor(private injector: Injector) {
  }

  handleError(error: Error | HttpErrorResponse): void {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);

    let message: string;
    let stackTrace: string;

    if (error instanceof HttpErrorResponse){
      message = errorService.getErrorDTOMessage(error);
      stackTrace = errorService.getServerStack(error);
      notifier.showError(message);

    } else {
      message = errorService.getErrorMessage(error);
      stackTrace = errorService.getErrorStack(error);
      notifier.showError(error.message);
    }

    logger.logError(message, stackTrace);

    console.error(error);

  }

}
