import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_ENDPOINT, HTTP_HEADERS, SPACER } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class SpacerService {
  private apiURL = API_ENDPOINT;
  httpOptions = { headers: new HttpHeaders(HTTP_HEADERS) };

  constructor(
    private http: HttpClient,
    private toasty: HotToastService,
    private clipboard: Clipboard
  ) {}

  getSpacerConfig(id: number): Observable<any> {
    return this.http
      .get<any>(this.apiURL + SPACER + id)
      .pipe(catchError(this.errorHandler));
  }

  findSpacerConfig(id: number): Observable<any> {
    return this.http
      .get<any>(this.apiURL + SPACER + id)
      .pipe(catchError(this.errorHandler));
  }

  updateSpacerConfig(id: number, spacer: any): Observable<any> {
    const call = this.http
      .post<any>(
        this.apiURL + SPACER + id,
        JSON.stringify(spacer),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));

    this.toasty.show('Spacer Updated!', {
      theme: 'snackbar',
      icon: '🤘',
      position: 'bottom-center',
    });

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

    return throwError(() => errorMessage);
  }

  // Copy to clipboard
  copy(object: any) {
    this.clipboard.copy(JSON.stringify(object));

    this.toasty.show('JSON Copied!', {
      theme: 'snackbar',
      icon: '🤘',
      position: 'bottom-center',
    });
  }
}
