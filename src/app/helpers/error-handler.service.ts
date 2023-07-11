import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoaderService } from '../service/loader.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(
    private messageService: MessageService, 
    private router: Router,
    private loaderService: LoaderService) { }
  public handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    this.loaderService.hideLoader();
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      switch (err.status) {
        case 400:
          errorMessage = err.error.message ? err.error.message : 'Bad Request.';
          break;
        case 401:
          errorMessage = err.error.message ? err.error.message : 'You need to log in to do this action.';
          localStorage.clear();
          this.router.navigate(['login']);
          break;
        case 403:
          errorMessage =
            err.error.message ? err.error.message : "You don't have permission to access the requested resource.";
          localStorage.clear();
          this.router.navigate(['login']);
          break;
        case 404:
          errorMessage = err.error.message ? err.error.message : 'The requested resource does not exist.';
          break;
        case 412:
          errorMessage = 'Precondition Failed.';
          break;
        case 500:
          errorMessage = err.error.message ? err.error.message : 'Internal Server Error.';
          break;
        case 503:
          errorMessage = 'The requested service is not available.';
          break;
        case 422:
          errorMessage = err.error.message ? err.error.message : 'Validation Error!';
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
