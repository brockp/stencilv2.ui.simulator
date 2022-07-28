import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { ViewportService } from '@app/services/viewport/viewport.service';
import { LayoutOptionsService } from '@app/services/layout-options/layout-options.service';
import { EditorService } from '@app/services/editor/editor.service';

import { environment } from 'src/environments/environment';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { Colors } from '@app/services/colors/colors.interface';
import { Subscription } from 'rxjs';
import { ColorsService } from '@app/services/colors/colors.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  subs = new Subscription();
  visualConfigSidebar: boolean = false;
  colorPalettes!: Colors[];
  components: any[] = [];
  component!: any;

  ////////////////////////////////////////////////////
  // PARENT form for entire editor
  ////////////////////////////////////////////////////

  form = this.fb.group({
    visualConfig: this.fb.group({
      BackgroundColor: '',
      BackgroundImage: '',
      Margin: this.fb.group({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }),
      Padding: this.fb.group({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }),
    }),
    baseComponentSelector: this.es.createBaseComponent({}),
    baseComponentTwoSelector: this.es.createBaseComponentTwo({}),
    primaryButtonSelector: this.es.createDynamicButton({}),
    inputSelector: this.es.createDynamicInput({}),
    slimEditorSelector: this.es.createSlimEditor({}),
    spacerSelector: this.es.createSpacer({}),
    dropdownSelector: this.es.createDynamicDropdown({}),
    appHeaderSelector: this.es.createAppHeader({}),
    headerConfig: this.fb.array([]),
    finalConfig: this.fb.array([]),
  });

  finalArray = this.es.finalArray;
  COMPONENTS = 'COMPONENTS';
  from = null;

  constructor(
    public vps: ViewportService,
    public los: LayoutOptionsService,
    public es: EditorService,
    private fb: FormBuilder,
    public ess: EditSidebarService,
    private cs: ColorsService
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
  }

  ngAfterViewInit(): void {}

  iconButtonLuu() {
    this.es.iconButton = true;
  }

  notIconButtonLuu() {
    this.es.iconButton = false;
  }

  close(): void {
    this.es.isHidden = false;
  }

  ////////////////////////////////////////////////////
  // get accessors for each FormArray
  ////////////////////////////////////////////////////

  get finalConfig() {
    return this.form.get('finalConfig') as FormArray;
  }

  get headerConfig() {
    return this.form.get('headerConfig') as FormArray;
  }

  ////////////////////////////////////////////////////
  // Pushes the dynamically created FormGroup to the FormArray
  ////////////////////////////////////////////////////

  addBaseComponent(baseComponent: any): any {
    this.finalConfig.push(this.es.createBaseComponent(baseComponent));
  }

  addBaseComponentTwo(baseComponent: any): any {
    this.finalConfig.push(this.es.createBaseComponentTwo(baseComponent));
  }

  addHeadline(headline: any): any {
    this.finalConfig.push(this.es.createDynamicHeadline(headline));
  }

  addPrimaryButton(button: any): any {
    this.finalConfig.push(this.es.createDynamicButton(button));
  }

  addSlimEntry(input: any): any {
    this.finalConfig.push(this.es.createDynamicInput(input));
  }

  addSlimEditor(input: any): any {
    this.finalConfig.push(this.es.createSlimEditor(input));
  }

  addDropdown(dropdown: any): any {
    this.finalConfig.push(this.es.createDynamicDropdown(dropdown));
  }

  addAppHeader(appHeader: any): any {
    this.headerConfig.push(this.es.createAppHeader(appHeader));
  }

  addSpacer(spacer: any): any {
    this.finalConfig.push(this.es.createSpacer(spacer));
  }

  // Removes the headline from the FormArray
  deleteHeadline(headlineIndex: number) {
    this.finalConfig.removeAt(headlineIndex);
  }

  ////////////////////////////////////////////////////
  // Visual Config Updates
  ////////////////////////////////////////////////////

  viewPortClassSwitch() {
    return {
      'max-w-Android': this.vps.android,
      'max-w-iPhone13': this.vps.iPhone12,
      'max-w-iPhone11': this.vps.iPhone11,
      'max-w-screen-xl': this.vps.desktop,
      'main-height': [
        this.vps.android,
        this.vps.iPhone11,
        this.vps.iPhone12,
        this.vps.desktop,
      ],
    };
  }

  visualConfigStyleObject() {
    return {
      'background-color': this.bgColor,
      'background-image': 'url(assets/' + this.bgImage + ')',
      'margin-top': this.marginTop,
      'margin-right': this.marginRight,
      'margin-bottom': this.marginBottom,
      'margin-left': this.marginLeft,
      'padding-top': this.paddingTop,
      'padding-right': this.paddingRight,
      'padding-bottom': this.paddingBottom,
      'padding-left': this.paddingLeft,
    };
  }

  imgHost = environment.imgHost;
  bgColor = this.form.controls['visualConfig'].get('BackgroundColor')!.value;
  bgImage = this.form.controls['visualConfig'].get('BackgroundImage')!.value;
  marginTop =
    this.form.controls['visualConfig'].get(['Margin', 'top'])!.value + 'px';
  marginRight =
    this.form.controls['visualConfig'].get(['Margin', 'right'])!.value + 'px';
  marginBottom =
    this.form.controls['visualConfig'].get(['Margin', 'bottom'])!.value + 'px';
  marginLeft =
    this.form.controls['visualConfig'].get(['Margin', 'left'])!.value + 'px';

  paddingTop =
    this.form.controls['visualConfig'].get(['Padding', 'top'])!.value + 'px';
  paddingRight =
    this.form.controls['visualConfig'].get(['Padding', 'right'])!.value + 'px';
  paddingBottom =
    this.form.controls['visualConfig'].get(['Padding', 'bottom'])!.value + 'px';
  paddingLeft =
    this.form.controls['visualConfig'].get(['Padding', 'left'])!.value + 'px';

  edit(): void {
    this.visualConfigSidebar = true;
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
    this.visualConfigSidebar = false;
  }

  updateVisualConfig() {
    this.form.controls['visualConfig'].patchValue({
      BackgroundColor:
        this.form.controls['visualConfig'].get('BackgroundColor')!.value,
      BackgroundImage:
        this.form.controls['visualConfig'].get('BackgroundImage')!.value,
      Margin: {
        top: this.form.controls['visualConfig'].get(['Margin', 'top'])!.value,
        right: this.form.controls['visualConfig'].get(['Margin', 'right'])!
          .value,
        bottom: this.form.controls['visualConfig'].get(['Margin', 'bottom'])!
          .value,
        left: this.form.controls['visualConfig'].get(['Margin', 'left'])!.value,
      },
      Padding: {
        top: this.form.controls['visualConfig'].get(['Padding', 'top'])!.value,
        right: this.form.controls['visualConfig'].get(['Padding', 'right'])!
          .value,
        bottom: this.form.controls['visualConfig'].get(['Padding', 'bottom'])!
          .value,
        left: this.form.controls['visualConfig'].get(['Padding', 'left'])!
          .value,
      },
    });

    this.paddingTop =
      this.form.controls['visualConfig'].get(['Padding', 'top'])!.value + 'px';
    this.paddingRight =
      this.form.controls['visualConfig'].get(['Padding', 'right'])!.value +
      'px';
    this.paddingBottom =
      this.form.controls['visualConfig'].get(['Padding', 'bottom'])!.value +
      'px';
    this.paddingLeft =
      this.form.controls['visualConfig'].get(['Padding', 'left'])!.value + 'px';

    this.bgColor =
      this.form.controls['visualConfig'].get('BackgroundColor')!.value;
    this.bgImage =
      this.form.controls['visualConfig'].get('BackgroundImage')!.value;
    this.marginTop =
      this.form.controls['visualConfig'].get(['Margin', 'top'])!.value + 'px';
    this.marginRight =
      this.form.controls['visualConfig'].get(['Margin', 'right'])!.value + 'px';
    this.marginBottom =
      this.form.controls['visualConfig'].get(['Margin', 'bottom'])!.value +
      'px';
    this.marginLeft =
      this.form.controls['visualConfig'].get(['Margin', 'left'])!.value + 'px';

    console.log(this.paddingTop);
  }

  changeVisaulConfigBgColor(color: any): void {
    this.form.controls['visualConfig'].patchValue({
      BackgroundColor: color,
    });
    this.form.updateValueAndValidity();

    this.bgColor =
      this.form.controls['visualConfig'].get('BackgroundColor')!.value;
  }

  changeVisualConfigBgImage(image: any): void {
    this.form.controls['visualConfig'].patchValue({
      BackgroundImage: image,
    });
    this.form.updateValueAndValidity();

    this.bgImage =
      this.form.controls['visualConfig'].get('BackgroundImage')!.value;
  }

  ////////////////////////////////////////////////////
  // FINAL submit of full data set to Stencil
  ////////////////////////////////////////////////////
  onSubmit(event: any): void {
    let visualConfig = this.form.get('visualConfig')!.value;

    const h = this.form.get('headerConfig')!.value;
    const yepHeader = this.es.headerArray.concat(h);

    let newHeaderArray = (values: any) => {
      return values.map((value: any) => {
        let appHeader;
        if (value.component === 'appHeader') {
          appHeader = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
              Column1Config: {
                HorizontalOptions:
                  value.appHeader.Column1Config.HorizontalOptions,
              },
              Column2Config: {
                HorizontalOptions:
                  value.appHeader.Column2Config.HorizontalOptions,
              },
              leftIcon: value.appHeader.LeftIcon,
              logo: value.appHeader.logo,
              rightIcon: value.appHeader.rightIcon,
            },
          };
          console.log('app Header: ', appHeader);
          let configuration_json = JSON.stringify(
            appHeader?.configuration_json
          );

          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            encapsulated_views: null,
            sections: null,
          };
          return newObj;
        }
      });
    };

    const f = this.form.get('finalConfig')!.value;
    const yep = this.es.finalArray.concat(f);

    let newArray = (values: any) => {
      return values.map((value: any) => {
        let h1;
        if (value.component === 'h1') {
          h1 = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Text: value.Text,
              TextColor: value.TextColor,
              BackgroundColor: value.BackgroundColor,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
            },
          };
          console.log('Header h1: ', h1);
          let configuration_json = JSON.stringify(h1?.configuration_json);
          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            sections: null,
            encapsulated_views: null,
          };
          return newObj;
        }

        let h2;
        if (value.component === 'h2') {
          h2 = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Text: value.Text,
              TextColor: value.TextColor,
              BackgroundColor: value.BackgroundColor,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
            },
          };
          console.log('No background: ', h2);
          let configuration_json = JSON.stringify(h2?.configuration_json);
          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            sections: null,
            encapsulated_views: null,
          };
          return newObj;
        }

        let h3;
        if (value.component === 'h3') {
          h3 = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Text: value.Text,
              TextColor: value.TextColor,
              BackgroundColor: value.BackgroundColor,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
            },
          };
          console.log('No background: ', h3);
          let configuration_json = JSON.stringify(h3?.configuration_json);
          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            sections: null,
            encapsulated_views: null,
          };
          return newObj;
        }

        let image;
        if (value.component === 'image') {
          image = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Source: value.Source,
              Width: value.ImageWidth,
              Height: value.ImageHeight,
              ImageWidth: value.ImageWidth,
              ImageHeight: value.ImageHeight,
              BackgroundColor: value.BackgroundColor,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
              FullBleedHorizontal: null,
              CommandName: value.CommandName,
              CommandParameter: value.CommandParameter,
            },
          };
          let configuration_json = JSON.stringify(image?.configuration_json);
          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            sections: null,
            encapsulated_views: null,
          };
          return newObj;
        }

        let primaryButton;
        if (value.component === 'primaryButton') {
          primaryButton = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Text: value.Text,
              CommandName: value.CommandName,
              CommandParameter: value.CommandParameter,
              BackgroundColor: value.BackgroundColor,
              CornerRadius: value.CornerRadius,
              Icon: value.Icon,
              ShowIcon: value.ShowIcon,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
              Margin: {
                top: value.Margin.top,
                right: value.Margin.right,
                bottom: value.Margin.bottom,
                left: value.Margin.left,
                HorizontalThickness: value.Margin.left + value.Margin.right,
                VerticalThickness: value.Margin.top + value.Margin.bottom,
              },
            },
          };
          let configuration_json = JSON.stringify(
            primaryButton?.configuration_json
          );
          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            sections: null,
            encapsulated_views: null,
          };
          return newObj;
        }

        let slimEntry;
        if (value.component === 'slimEntry') {
          slimEntry = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Input: value.slimEntry.Input,
              Placeholder: value.slimEntry.Placeholder,
              IsPassword: value.slimEntry.IsPassword,
              Borderless: value.slimEntry.Borderless,
              BackgroundColor: value.slimEntry.BackgroundColor,
              InputBackgroundColor: value.slimEntry.InputBackgroundColor,
              TextColor: value.ButtonTextColor,
              PlaceholderColor: value.slimEntry.PlaceholderColor,
              Padding: {
                top: value.slimEntry.Padding.top,
                right: value.slimEntry.Padding.right,
                bottom: value.slimEntry.Padding.bottom,
                left: value.slimEntry.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
            },
          };
          let configuration_json = JSON.stringify(
            slimEntry?.configuration_json
          );
          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            sections: null,
            encapsulated_views: null,
          };
          return newObj;
        }

        let slimEditor;
        if (value.component === 'slimEditor') {
          slimEditor = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Label: value.slimEditor.Label,
              Input: value.slimEditor.Input,
              Placeholder: value.slimEditor.Placeholder,
              BackgroundColor: value.slimEditor.BackgroundColor,
              InputBackgroundColor: value.slimEditor.InputBackgroundColor,
              TextColor: value.slimEditor.TextColor,
              PlaceholderColor: value.slimEditor.PlaceholderColor,
              Margin: {
                top: value.slimEditor.Margin.top,
                right: value.slimEditor.Margin.right,
                bottom: value.slimEditor.Margin.bottom,
                left: value.slimEditor.Margin.left,
                HorizontalThickness: value.Margin.left + value.Margin.right,
                VerticalThickness: value.Margin.top + value.Margin.bottom,
              },
              Padding: {
                top: value.slimEditor.Padding.top,
                right: value.slimEditor.Padding.right,
                bottom: value.slimEditor.Padding.bottom,
                left: value.slimEditor.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
            },
          };
          let configuration_json = JSON.stringify(
            slimEditor?.configuration_json
          );
          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            sections: null,
            encapsulated_views: null,
          };
          return newObj;
        }

        let dropDown;
        if (value.component === 'dropdown') {
          dropDown = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              IsRequired: value.dropDown.IsRequired,
              GroupName: value.dropDown.GroupName,
              Borderless: value.dropDown.Borderless,
              FieldName: value.dropDown.FieldName,
              OptonOne: value.dropDown.OptionOne,
              OptionTwo: value.dropDown.OptionTwo,
              Padding: {
                top: value.dropDown.Padding.top,
                right: value.dropDown.Padding.right,
                bottom: value.dropDown.Padding.bottom,
                left: value.dropDown.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
              Margin: {
                top: value.Margin.top,
                right: value.Margin.right,
                bottom: value.Margin.bottom,
                left: value.Margin.left,
                HorizontalThickness: value.Margin.left + value.Margin.right,
                VerticalThickness: value.Margin.top + value.Margin.bottom,
              },
            },
          };
          let configuration_json = JSON.stringify(dropDown?.configuration_json);
          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            sections: null,
            encapsulated_views: null,
          };
          return newObj;
        }

        let appHeader;
        if (value.component === 'appHeader') {
          appHeader = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
                HorizontalThickness: value.Padding.left + value.Padding.right,
                VerticalThickness: value.Padding.top + value.Padding.bottom,
              },
              Column1Config: {
                HorizontalOptions:
                  value.appHeader.Column1Config.HorizontalOptions,
              },
              Column2Config: {
                HorizontalOptions:
                  value.appHeader.Column2Config.HorizontalOptions,
              },
              leftIcon: value.appHeader.LeftIcon,
              logo: value.appHeader.logo,
              rightIcon: value.appHeader.rightIcon,
            },
          };
          console.log('app Header: ', appHeader);
          let configuration_json = JSON.stringify(
            appHeader?.configuration_json
          );

          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            encapsulated_views: null,
            sections: null,
          };
          return newObj;
        }

        let spacer;
        if (value.component === 'spacer') {
          spacer = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Height: value.spacer.Height,
              BackgroundColor: value.spacer.BackgroundColor,
            },
          };
          console.log('New Spacer: ', spacer);
          let configuration_json = JSON.stringify(spacer?.configuration_json);

          let newObj = {
            library: '',
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
            encapsulated_views: null,
            sections: null,
          };
          return newObj;
        }
      });
    };

    let awesome = newArray(yep);
    let awesomeHeader = newHeaderArray(yepHeader);
    console.log('HeaderConfig: ', awesomeHeader, 'ViewConfig: : ', awesome);

    let final = awesome;
    let finalHeader = awesomeHeader;

    console.log(
      'Visual Config: ',
      visualConfig,
      'Header Configs: ',
      finalHeader,
      'View Configs: ',
      final
    );

    this.es
      .sendConfig(finalHeader, final, visualConfig, true)
      .subscribe(() => {});
  }

  ////////////////////////////////////////////////////
  // Destroy all subscriptions
  ////////////////////////////////////////////////////

  ngOnDestroy() {
    // destroy all the subscriptions at once
    this.subs.unsubscribe();
  }
}
