import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_ENDPOINT, HTTP_HEADERS, H1 } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class HeadlineService {
  private apiURL = API_ENDPOINT;
  httpOptions = { headers: new HttpHeaders(HTTP_HEADERS) };
  public password = 'SuziesPrivateEyes';

  constructor(
    private http: HttpClient,
    private toasty: HotToastService,
    private clipboard: Clipboard
  ) {}

  getHeadlineConfig(id: number): Observable<any> {
    return this.http
      .get<any>(this.apiURL + H1 + id)
      .pipe(catchError(this.errorHandler));
  }

  findHeadlineConfig(id: number): Observable<any> {
    return this.http
      .get<any>(this.apiURL + H1 + id)
      .pipe(catchError(this.errorHandler));
  }

  create(post: any): Observable<any> {
    return this.http
      .post<any>(this.apiURL + H1, JSON.stringify(post), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  updateHeadlineConfig(id: number, headline: any): any {
    const secret = { secret: 'SuziesPrivateEyes' };
    const item = JSON.stringify(headline);
    const payload = this.http
      .post<any>(this.apiURL + H1 + id, item)
      .pipe(catchError(this.errorHandler));

    return payload;
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
