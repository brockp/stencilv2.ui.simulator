import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_ENDPOINT, HTTP_HEADERS, SPACER } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class SpacerService {
  private apiURL = API_ENDPOINT;
  httpOptions = { headers: new HttpHeaders(HTTP_HEADERS) };

  constructor(private httpClient: HttpClient, private clipboard: Clipboard) {}

  getSpacer(id: number | undefined): Observable<any> {
    return this.httpClient
      .get<any>(this.apiURL + SPACER + id)
      .pipe(catchError(this.errorHandler));
  }

  findSpacer(id: number | undefined): Observable<any> {
    return this.httpClient
      .get<any>(this.apiURL + SPACER + id)
      .pipe(catchError(this.errorHandler));
  }

  updateSpacer(id: number, entry: any): Observable<any> {
    const call = this.httpClient
      .post<any>(
        this.apiURL + SPACER + id,
        JSON.stringify(entry),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));

    // this.toasty.show('Spacer Updated!', {
    //   theme: 'snackbar',
    //   icon: '🤘',
    //   position: 'bottom-center',
    // });

    return call;
  }

  // Error Handler
  errorHandler(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }

  // Copy to clipboard
  copy(object: any) {
    this.clipboard.copy(JSON.stringify(object));

    // this.toasty.show('JSON Copied!', {
    //   theme: 'snackbar',
    //   icon: '🤘',
    //   position: 'bottom-center',
    // });
  }
}
