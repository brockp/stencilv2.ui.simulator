import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SlimEntry } from '@app/components/text-input/model/slimentry.interface';
import { API_ENDPOINT, HTTP_HEADERS, SLIMENTRY } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class TextInputService {
  private apiURL = API_ENDPOINT;
  httpOptions = { headers: new HttpHeaders(HTTP_HEADERS) };

  constructor(
    private httpClient: HttpClient,
    private clipboard: Clipboard,
    private toasty: HotToastService
  ) {}

  getSlimEntry(id: number | undefined): Observable<any> {
    return this.httpClient
      .get<SlimEntry>(this.apiURL + SLIMENTRY + id)
      .pipe(catchError(this.errorHandler));
  }

  findSlimEntry(id: number | undefined): Observable<any> {
    return this.httpClient
      .get<SlimEntry>(this.apiURL + SLIMENTRY + id)
      .pipe(catchError(this.errorHandler));
  }

  updateSlimEntry(id: number, entry: any): Observable<any> {
    const call = this.httpClient
      .post<any>(
        this.apiURL + SLIMENTRY + id,
        JSON.stringify(entry),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));

    this.toasty.show('Slim Entry Updated!', {
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

    return throwError(errorMessage);
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
