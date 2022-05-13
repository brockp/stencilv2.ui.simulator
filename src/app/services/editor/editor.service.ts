import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_ENDPOINT, HTTP_HEADERS, FINAL } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private apiURL = API_ENDPOINT;
  httpOptions = { headers: new HttpHeaders(HTTP_HEADERS) };

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private toasty: HotToastService
  ) {}

  // Create new Headline component Formgroup inside FormArray
  public createHeadline(headline: any): any {
    return this.fb.group({
      id: '',
      component: 'h1',
      version: headline.version || '1.0',
      configuration_json: this.fb.group({
        Text: headline.Text || 'Headline Default',
        TextSize: '32px',
        TextColor: headline.TextColor || '#62b4ff',
        BackgroundColor: headline.BackgroundColor || '',
        Padding: this.fb.group({
          top: headline.top || '',
          right: headline.right || '',
          bottom: headline.bottom || '',
          left: headline.left || '',
        }),
      }),
    });
  }

  // Create new Description component Formgroup inside FormArray
  public createDescription(description: any): any {
    return this.fb.group({
      id: '',
      component: 'h2',
      version: description.Version || '1.0',
      configuration_json: this.fb.group({
        Text: description.Text || 'Description Default',
        TextSize: '16px',
        TextColor: description.TextColor || '#efefef',
        BackgroundColor: description.BackgroundColor || '',
        Padding: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
      }),
    });
  }

  // Create new GraphicSelectorComponent
  public createGraphic(graphic: any): any {
    return this.fb.group({
      id: '',
      version: '',
      component: 'image',
      configuration_json: this.fb.group({
        Source: 'refer-a-friend.svg',
        Width: '35',
        Height: '100',
        MinWidth: '',
        MinHeight: '',
        BackgroundColor: '',
        Padding: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
      }),
    });
  }

  public createButton(button: any): any {
    return this.fb.group({
      id: '',
      version: '',
      component: 'primaryButton',
      configuration_json: this.fb.group({
        Width: '',
        CornerRadius: '',
        Text: 'Click Now',
        TextColor: '',
        CommandName: '',
        CommandParameter: '',
        BackgroundColor: '#900',
        Padding: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
        Margin: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
      }),
    });
  }

  public createIconButton(button: any): any {
    return this.fb.group({
      id: '',
      version: '',
      component: 'iconButton',
      configuration_json: this.fb.group({
        Width: '',
        CornerRadius: '',
        Text: 'Click Now',
        TextColor: '',
        CommandName: '',
        CommandParameter: '',
        BackgroundColor: '#900',
        Icon: '',
        Padding: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
        Margin: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
      }),
    });
  }

  public createSlimEntry(input: any): any {
    return this.fb.group({
      id: '',
      version: '',
      component: 'slimEntry',
      configuration_json: this.fb.group({
        IsRequired: false,
        IsPassword: false,
        GroupName: '',
        BackgroundColor: '',
        Borderless: 'standard',
        FieldName: '',
        Placeholder: '',
        Type: '',
        Padding: this.fb.group({
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
        }),
      }),
    });
  }

  public createSpacer(spacer: any): any {
    return this.fb.group({
      Version: '',
      Height: '',
      BackgroundColor: '',
    });
  }

  // Submit full configuration information
  sendConfig(image: any, visualConfig: any): Observable<any> {
    const body = {
      VisualConfig: visualConfig,
      ViewConfig: image,
    };

    const call = this.http
      .post<any>(this.apiURL + FINAL + '1', body, this.httpOptions)
      .pipe(catchError(this.errorHandler));

    this.toasty.show('Image Updated!', {
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
}
