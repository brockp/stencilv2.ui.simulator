import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_ENDPOINT, HTTP_HEADERS, H2 } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class DescriptionService {
  private apiURL = API_ENDPOINT;
  private id!: number;
  httpOptions = { headers: new HttpHeaders(HTTP_HEADERS) };

  constructor(
    private http: HttpClient,
    private toasty: HotToastService,
    private clipboard: Clipboard
  ) {}

  getDescriptioneConfig(id: number): Observable<any> {
    return this.http
      .get<any>(this.apiURL + H2 + id)
      .pipe(catchError(this.errorHandler));
  }

  findDescriptioneConfig(id: number): Observable<any> {
    return this.http
      .get<any>(this.apiURL + H2 + id)
      .pipe(catchError(this.errorHandler));
  }

  updateDescriptionConfig(id: number, description: any): any {
    const call = this.http
      .post<any>(
        this.apiURL + H2 + id,
        JSON.stringify(description),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));

    this.toasty.show('Description Updated!', {
      theme: 'snackbar',
      icon: '😎',
      position: 'bottom-center',
    });

    return call;
  }

  createDescriptionConfig(id: number, description: any): any {
    const call = this.http
      .post<any>(
        this.apiURL + H2 + id,
        JSON.stringify(description),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));

    this.toasty.show('Description Created!', {
      theme: 'snackbar',
      icon: '😎',
      position: 'bottom-center',
    });

    return call;
  }

  deleteDescriptionConfig(id: number) {
    return this.http
      .delete(this.apiURL + H2 + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
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
