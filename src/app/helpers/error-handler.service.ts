import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private messageService: MessageService, private router: Router) {}
  public handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      switch (err.status) {
        case 400:
          errorMessage = 'Bad Request.';
          break;
        case 401:
          errorMessage = 'You need to log in to do this action.';
          this.router.navigate(['login']);
          break;
        case 403:
          errorMessage =
            "You don't have permission to access the requested resource.";
          this.router.navigate(['login']);
          break;
        case 404:
          errorMessage = 'The requested resource does not exist.';
          break;
        case 412:
          errorMessage = 'Precondition Failed.';
          break;
        case 500:
          errorMessage = 'Internal Server Error.';
          break;
        case 503:
          errorMessage = 'The requested service is not available.';
          break;
        case 422:
          errorMessage = 'Validation Error!';
          break;
        default:
          errorMessage = 'Something went wrong!';
      }
    }
    if (errorMessage) {
      this.messageService.add({
        detail: errorMessage,
        severity: 'error',
        summary: 'Error',
      });
    }
  }
}
