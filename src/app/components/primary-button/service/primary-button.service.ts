import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { primaryButton } from '@app/components/primary-button/model/primary-button.interface';
import {
  API_ENDPOINT,
  HTTP_HEADERS,
  PRIMARYBUTTON,
} from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class PrimaryButtonService {
  private apiURL = API_ENDPOINT;
  httpOptions = { headers: new HttpHeaders(HTTP_HEADERS) };

  constructor(
    private httpClient: HttpClient,
    private toasty: HotToastService,
    private clipboard: Clipboard
  ) {}

  getPrimaryButton(id: number): Observable<any> {
    return this.httpClient
      .get<primaryButton>(this.apiURL + PRIMARYBUTTON + id)
      .pipe(catchError(this.errorHandler));
  }

  findPrimaryButton(id: number): Observable<any> {
    return this.httpClient
      .get<primaryButton>(this.apiURL + PRIMARYBUTTON + id)
      .pipe(catchError(this.errorHandler));
  }

  updatePrimaryButton(id: number | null, button: any): Observable<any> {
    const call = this.httpClient
      .post<any>(
        this.apiURL + PRIMARYBUTTON + id,
        JSON.stringify(button),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));

    this.toasty.show('Primary Button Updated!', {
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
