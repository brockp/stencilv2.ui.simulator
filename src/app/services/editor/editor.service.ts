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
  public finalArray: any[] = [];
  public isHidden!: boolean;
  public iconButton = false;
  public image = false;
  public description = false;
  public input = false;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private toasty: HotToastService
  ) {}

  public createBaseComponent(headline: any): any {
    return this.fb.group({
      id: '',
      component: 'image',
      Text: '',
      TextSize: '32',
      TextAlignment: 'start',
      ButtonTextSize: '',
      ButtonText: '',
      TextColor: '#62b4ff',
      ButtonTextColor: '',
      BackgroundColor: '',
      Width: '',
      ImageWidth: '85',
      Height: '',
      Source: 'refer-a-friend.svg',
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
      slimEntry: this.fb.group({
        display: false,

        IsRequired: '',
        IsPassword: '',
        GroupName: '',
        Borderless: '',
        FieldName: '',
        Placeholder: '',
        Type: '',
        Padding: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
      }),
    });
  }

  public createBaseComponentTwo(headline: any): any {
    return this.fb.group({
      id: '',
      component: 'h2',
      Text: 'Hello',
      TextSize: '16',
      TextAlignment: 'start',
      ButtonTextSize: '',
      ButtonText: '',
      TextColor: '#62b4ff',
      ButtonTextColor: '',
      BackgroundColor: '',
      Width: '',
      ImageWidth: '',
      Height: '',
      Source: 'blank.png',
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
      slimEntry: this.fb.group({
        display: false,

        IsRequired: '',
        IsPassword: '',
        GroupName: '',
        Borderless: '',
        FieldName: '',
        Placeholder: '',
        Type: '',
        Padding: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
      }),
    });
  }

  public createDynamicHeadline(headline: any): any {
    return this.fb.group({
      id: 1,
      component: 'h1',
      Text: 'Headline',
      TextSize: '32',
      TextAlignment: 'start',
      ButtonTextSize: '',
      ButtonText: '',
      TextColor: '#62b4ff',
      ButtonTextColor: '',
      BackgroundColor: '',
      Width: '',
      ImageWidth: '',
      Height: '',
      Source: 'blank.png',
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
      slimEntry: this.fb.group({
        display: false,
        IsRequired: '',
        IsPassword: '',
        GroupName: '',
        Borderless: '',
        FieldName: '',
        Placeholder: '',
        Type: '',
        Padding: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
      }),
    });
  }

  public createDynamicButton(button: any): any {
    return this.fb.group({
      id: 1,
      component: 'primaryButton',
      Text: 'Login',
      ButtonText: '',
      TextSize: '32',
      TextAlignment: 'center',
      ButtonTextSize: '',
      TextColor: '#ffffff',
      ButtonTextColor: '',
      BackgroundColor: '#3589F9',
      Width: '',
      Height: '',
      ImageWidth: '',
      Source: 'blank.png',
      Icon: '',
      CornerRadius: '9999',
      Padding: this.fb.group({
        top: 10,
        right: 20,
        bottom: 10,
        left: 20,
      }),
      Margin: this.fb.group({
        top: '',
        right: '',
        bottom: '',
        left: '',
      }),
      slimEntry: this.fb.group({
        display: false,
        IsRequired: '',
        IsPassword: '',
        GroupName: '',
        Borderless: '',
        FieldName: '',
        Placeholder: '',
        Type: '',
        Padding: this.fb.group({
          top: '',
          right: '',
          bottom: '',
          left: '',
        }),
      }),
    });
  }

  public createDynamicInput(input: any): any {
    return this.fb.group({
      id: 1,
      component: 'slimEntry',
      Text: '',
      TextAlignment: 'start',
      ButtonText: '',
      TextSize: '',
      ButtonTextSize: '',
      TextColor: '',
      ButtonTextColor: '',
      BackgroundColor: '',
      Width: '',
      Height: '',
      ImageWidth: '',
      Source: 'blank.png',
      Icon: '',
      CornerRadius: '',
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
      slimEntry: this.fb.group({
        display: true,
        IsRequired: false,
        IsPassword: false,
        GroupName: '',
        Borderless: 'standard',
        FieldName: 'FieldName Default',
        Placeholder: '',
        Type: '',
        Padding: this.fb.group({
          top: 10,
          right: 20,
          bottom: 10,
          left: 20,
        }),
      }),
    });
  }

  // Submit full configuration information
  sendConfig(image: any, visualConfig: any, supress: boolean): Observable<any> {
    const body = {
      ScreenStorageKey: null,
      ScreenName: null,
      ScreenParameter: null,
      SuppressPersist: supress,
      AutomaticDownload: false,
      IsMenuSupported: true,
      DisableCellReuse: true,
      Lifetime: 0,
      DownloadedUTC: null,
      CacheUntilUTC: null,
      ExpireUTC: null,
      InvalidatedUTC: null,
      ScreenNavigationData: null,
      VisualConfig: visualConfig,
      ViewConfig: image,
      HeaderConfigs: [],
      FooterConfigs: [],
      BeforeShowCommands: [],
      AfterShowCommands: [],
      DownloadCommands: [],
      MenuConfigs: [
        {
          is_selected: false,
          identifier: 'main.home',
          is_icon: true,
          icon_character: '',
          label: 'Home',
          command: 'app.navigate.push',
          command_parameter: 'dashboard',
          ui_suppressed: false,
        },
        {
          is_selected: false,
          identifier: 'main.tests',
          is_icon: true,
          icon_character: '',
          label: 'Tests',
          command: 'app.navigate.push',
          command_parameter: 'test.list.v1',
          ui_suppressed: false,
        },
        {
          is_selected: false,
          identifier: 'main.glossary',
          is_icon: true,
          icon_character: '',
          label: 'Glossary',
          command: 'app.navigate.push',
          command_parameter: 'dictionary.overview.v1',
          ui_suppressed: false,
        },
        {
          is_selected: true,
          identifier: 'main.help',
          is_icon: true,
          icon_character: '',
          label: 'Help',
          command: 'app.navigate.push',
          command_parameter: 'help.overview.v1',
          ui_suppressed: false,
        },
        {
          is_selected: false,
          identifier: 'main.settings',
          is_icon: true,
          icon_character: '',
          label: 'Account',
          command: 'app.navigate.push',
          command_parameter: 'settings.overview.v1',
          ui_suppressed: false,
        },
      ],
      Claims: [],
    };

    const call = this.http
      .post<any>(
        this.apiURL + FINAL + 'test',
        JSON.stringify(body),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));

    this.toasty.show('Screen Sent!', {
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
