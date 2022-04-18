import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { iconButton } from '@app/components/icon-button/model/icon-button.interface';
import { API_ENDPOINT, HTTP_HEADERS, BUTTONLUU } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class IconButtonService {
  private apiURL = API_ENDPOINT;
  httpOptions = { headers: new HttpHeaders(HTTP_HEADERS) };

  constructor(
    private httpClient: HttpClient,
    private toasty: HotToastService,
    private clipboard: Clipboard
  ) {}

  getIconButton(id: number): Observable<any> {
    return this.httpClient
      .get<iconButton>(this.apiURL + BUTTONLUU + id)
      .pipe(catchError(this.errorHandler));
  }

  findIconButton(id: number): Observable<any> {
    return this.httpClient
      .get<iconButton>(this.apiURL + BUTTONLUU + id)
      .pipe(catchError(this.errorHandler));
  }

  updateIconButton(id: number, button: any): Observable<any> {
    const call = this.httpClient
      .post<any>(
        this.apiURL + BUTTONLUU + id,
        JSON.stringify(button),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));

    this.toasty.show('Icon Button Updated!', {
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
