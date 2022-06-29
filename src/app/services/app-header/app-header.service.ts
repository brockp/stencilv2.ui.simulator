import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_ENDPOINT, HTTP_HEADERS, APPHEADER } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class AppHeaderService {
  private apiURL = API_ENDPOINT;
  httpOptions = { headers: new HttpHeaders(HTTP_HEADERS) };

  constructor(
    private http: HttpClient,
    private toasty: HotToastService,
    private clipboard: Clipboard
  ) {}

  getHeaderConfig(id: number): Observable<any> {
    return this.http
      .get<any>(this.apiURL + APPHEADER + id)
      .pipe(catchError(this.errorHandler));
  }

  findHeaderConfig(id: number): Observable<any> {
    return this.http
      .get<any>(this.apiURL + APPHEADER + id)
      .pipe(catchError(this.errorHandler));
  }

  updateHeadernConfig(id: number, mobileHeader: any): Observable<any> {
    const call = this.http
      .post<any>(
        this.apiURL + APPHEADER + id,
        JSON.stringify(mobileHeader),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));

    this.toasty.show('Mobile Header Updated!', {
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
