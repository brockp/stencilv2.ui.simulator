import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ViewportService } from '@app/services/viewport/viewport.service';
import { EditorService } from '@app/services/editor/editor.service';

import { environment } from 'src/environments/environment';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { Colors } from '@app/services/colors/colors.interface';
import { Subscription } from 'rxjs';
import { ColorsService } from '@app/services/colors/colors.service';
import { LoadConfigDialogComponent } from '../load-config-dialog/load-config-dialog.component';
import { Options } from 'sortablejs';

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

  options: Options = {
    disabled: false,
    revertOnSpill: true,
  };

  ////////////////////////////////////////////////////
  // PARENT form for entire editor
  ////////////////////////////////////////////////////

  form = this.fb.group({
    visualConfig: this.fb.group({
      BackgroundColor: null,
      BackgroundImage: 'blank.png',
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
    compositionName: '',
    baseComponentSelector: this.es.createBaseComponent({}),
    baseComponentTwoSelector: this.es.createBaseComponentTwo({}),
    loadHeadlineSelector: this.es.loadDynamicHeadline({}),
    headlineTwoSelector: this.es.createHeadlineTwo({}),
    headlineThreeSelector: this.es.createHeadlineThree({}),
    primaryButtonSelector: this.es.createPrimaryButton({}),
    inputSelector: this.es.createDynamicInput({}),
    slimEditorSelector: this.es.createSlimEditor({}),
    fullEntrySelector: this.es.createFullEntry({}),
    fullEditorSelector: this.es.createFullEditor({}),
    spacerSelector: this.es.createSpacer({}),
    dropdownSelector: this.es.createDynamicDropdown({}),
    appHeaderSelector: this.es.createAppHeader({}),
    headerTitleBarSelector: this.es.createHeaderTitleBar({}),
    headerWithIconSelector: this.es.createHeaderWithIcon({}),
    expandingTextSelector: this.es.createExpandingText({}),
    headerConfig: this.fb.array([]),
    finalConfig: this.fb.array([]),
  });

  finalArray = this.es.finalArray;
  COMPONENTS = 'COMPONENTS';
  from = null;

  constructor(
    public vps: ViewportService,
    public es: EditorService,
    private fb: FormBuilder,
    public ess: EditSidebarService,
    private cs: ColorsService,
    private dialog: MatDialog
  ) {}

  openModal() {
    const dialogRef = this.dialog.open(LoadConfigDialogComponent, {
      // data: { name: this.name },
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((submit) => {
      if (submit) {
        this.compName = submit;
        this.form.get('compositionName')!.setValue(this.compName);
        console.log(submit);
        this.gitIt(submit);
        this.es.isHidden = true;
      } else {
      }
    });
  }

  setiPhone11(): void {
    this.vps.setiPhone11();
  }

  luu: any[] = [];
  headerLuu: any[] = [];
  zero: any;
  one: any;
  two: any;
  compComponent: any;
  compName!: string;

  loadConfig(name: string) {
    this.compName = name;
  }

  gitIt(name: string): void {
    this.es.getCompositionConfig(name).subscribe((data) => {
      this.luu = JSON.parse(JSON.stringify(data.ViewConfigs));
      this.headerLuu = JSON.parse(JSON.stringify(data.HeaderConfigs));
      console.log(this.headerLuu);

      this.headerLuu.filter((element: any) => {
        if (element.component === 'appHeader') {
          const index = this.headerLuu.indexOf(element);
          this.headerConfig.push(
            this.es.loadAppHeader(
              JSON.parse(this.headerLuu[index].configuration_json)
            )
          );
        }

        if (element.component === 'headerTitleBar') {
          const index = this.headerLuu.indexOf(element);
          this.headerConfig.push(
            this.es.loadHeaderTitleBar(
              JSON.parse(this.headerLuu[index].configuration_json)
            )
          );
        }
      });

      this.luu.filter((element: any) => {
        // console.log(element.configuration_json);

        if (element.component === 'h1') {
          const index = this.luu.indexOf(element);
          this.form.get('loadHeadlineSelector')!.value;
          this.finalConfig.push(
            this.es.loadDynamicHeadline(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }

        if (element.component === 'h2') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadHeadlineTwo(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }

        if (element.component === 'h3') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadHeadlineThree(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }

        if (element.component === 'image') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadBaseComponent(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }

        if (element.component === 'primaryButton') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadPrimaryButton(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }

        if (element.component === 'plainText') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadPlaintext(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }

        if (element.component === 'slimEntry') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadSlimentry(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }

        if (element.component === 'slimEditor') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadSlimEditor(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }

        if (element.component === 'dropdown') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadDynamicDropdown(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }

        if (element.component === 'spacer') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadSpacer(JSON.parse(this.luu[index].configuration_json))
          );
        }

        if (element.component === 'expandingText') {
          const index = this.luu.indexOf(element);
          this.finalConfig.push(
            this.es.loadExpandingText(
              JSON.parse(this.luu[index].configuration_json)
            )
          );
        }
      });
    });
  }

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
    this.openModal();
    this.onChanges();
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

  addHeadlineTwo(headline: any): any {
    this.finalConfig.push(this.es.createHeadlineTwo(headline));
  }

  addHeadlineThree(headline: any): any {
    this.finalConfig.push(this.es.createHeadlineThree(headline));
  }

  addPrimaryButton(button: any): any {
    this.finalConfig.push(this.es.createPrimaryButton(button));
  }

  addSlimEntry(input: any): any {
    this.finalConfig.push(this.es.createDynamicInput(input));
  }

  addSlimEditor(input: any): any {
    this.finalConfig.push(this.es.createSlimEditor(input));
  }

  addFullEntry(input: any): any {
    this.finalConfig.push(this.es.createFullEntry(input));
  }

  addFullEditor(input: any): any {
    this.finalConfig.push(this.es.createFullEditor(input));
  }

  addDropdown(dropdown: any): any {
    this.finalConfig.push(this.es.createDynamicDropdown(dropdown));
  }

  addAppHeader(appHeader: any): any {
    this.headerConfig.push(this.es.createAppHeader(appHeader));
  }

  addHeaderTitleBar(headerTitleBar: any): any {
    this.headerConfig.push(this.es.createHeaderTitleBar(headerTitleBar));
  }

  addHeaderWIcon(headerWIcon: any): any {
    this.headerConfig.push(this.es.createHeaderWithIcon(headerWIcon));
  }

  addSpacer(spacer: any): any {
    this.finalConfig.push(this.es.createSpacer(spacer));
  }

  addExpandingText(expandingText: any): any {
    this.finalConfig.push(this.es.createExpandingText(expandingText));
    console.log(this.finalConfig);
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

  onChanges(): void {
    this.form.controls['visualConfig']
      .get(['Padding', 'left'])!
      .valueChanges.subscribe((val) => {
        this.paddingLeft =
          this.form.controls['visualConfig'].get(['Padding', 'left'])!.value +
          'px';
      });

    this.form.controls['visualConfig']
      .get(['Padding', 'right'])!
      .valueChanges.subscribe((val) => {
        this.paddingRight =
          this.form.controls['visualConfig'].get(['Padding', 'right'])!.value +
          'px';
      });

    this.form.controls['visualConfig']
      .get(['Padding', 'top'])!
      .valueChanges.subscribe((val) => {
        this.paddingTop =
          this.form.controls['visualConfig'].get(['Padding', 'top'])!.value +
          'px';
      });

    this.form.controls['visualConfig']
      .get(['Padding', 'bottom'])!
      .valueChanges.subscribe((val) => {
        this.paddingBottom =
          this.form.controls['visualConfig'].get(['Padding', 'bottom'])!.value +
          'px';
      });
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

  cancel() {
    console.log('clicked off editable component');
    // Resets the ability to drag components
    this.options = {
      disabled: false,
    };
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

    // Visaul Config form data
    let visualConfig = this.form.get('visualConfig')!.value;
    let name = this.form.get('compositionName')!.value;

    ////////////////////////////////////////////////////
    // Set up headerConfig final data set
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
              BackgroundColor: value.appHeader.BackgroundColor,
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
              leftIcon: value.appHeader.leftIcon,
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

        let headerTitleBar;
        if (value.component === 'headerTitleBar') {
          headerTitleBar = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              TextColor: value.headerTitleBar.TextColor,
              BackgroundColor: value.headerTitleBar.BackgroundColor,
              LeftIcon: value.headerTitleBar.LeftIcon,
              RightIcon: value.headerTitleBar.RightIcon,
              Title: value.headerTitleBar.Title,
              RightCommandName: value.headerTitleBar.RightCommandName,
              RightCommandParameter: value.headerTitleBar.RightCommandParameter,
              LeftCommandName: value.headerTitleBar.LeftCommandName,
              LeftCommandParameter: value.headerTitleBar.LeftCommandParameter,
            },
          };
          console.log('headerTitleBar: ', headerTitleBar);
          let configuration_json = JSON.stringify(
            headerTitleBar?.configuration_json
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

        let headerWithIcon;
        if (value.component === 'headerWithIcon') {
          headerWithIcon = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              TextColor: value.headerWithIcon.TextColor,
              BackgroundColor: value.headerWithIcon.BackgroundColor,
              Icon: value.headerWithIcon.Icon,
              ShowIcon: value.headerWithIcon.ShowIcon,
              Text: value.headerWithIcon.Text,
              FontSize: value.headerWithIcon.FontSize,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
              },
              HorizontalThickness: value.Padding.left + value.Padding.right,
              VerticalThickness: value.Padding.top + value.Padding.bottom,
            },
          };
          console.log('headerWithIcon: ', headerWithIcon);
          let configuration_json = JSON.stringify(
            headerWithIcon?.configuration_json
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
    // New variable taking in the updated mapped array values
    let awesomeHeader = newHeaderArray(yepHeader);

    // Set up finalConfig data set
    let f = this.form.get('finalConfig')!.value;
    let yep = this.es.finalArray.concat(f);
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
            component: 'h2',
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

        let plainText;
        if (value.component === 'plainText') {
          plainText = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Text: value.Text,
              TextColor: value.TextColor,
              FontSize: value.TextSize,
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
          console.log('plainText component: ', plainText);
          let configuration_json = JSON.stringify(
            plainText?.configuration_json
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
              FullBleedHorizontal: false,
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
              Text: value.primaryButton.Text,
              CommandName: value.primaryButton.CommandName,
              CommandParameter: value.primaryButton.CommandParameter,
              BackgroundColor: value.primaryButton.BackgroundColor,
              CornerRadius: value.primaryButton.CornerRadius,
              Icon: value.primaryButton.Icon,
              ShowIcon: value.primaryButton.ShowIcon,
              Padding: {
                top: value.primaryButton.Padding.top,
                right: value.primaryButton.Padding.right,
                bottom: value.primaryButton.Padding.bottom,
                left: value.primaryButton.Padding.left,
                HorizontalThickness:
                  value.primaryButton.Padding.left +
                  value.primaryButton.Padding.right,
                VerticalThickness:
                  value.primaryButton.Padding.top +
                  value.primaryButton.Padding.bottom,
              },
              Margin: {
                top: value.primaryButton.Margin.top,
                right: value.primaryButton.Margin.right,
                bottom: value.primaryButton.Margin.bottom,
                left: value.primaryButton.Margin.left,
                HorizontalThickness:
                  value.primaryButton.Margin.left +
                  value.primaryButton.Margin.right,
                VerticalThickness:
                  value.primaryButton.Margin.top +
                  value.primaryButton.Margin.bottom,
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

        let fullEntry;
        if (value.component === 'fullEntry') {
          fullEntry = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              Label: value.fullEntry.Label,
              Input: value.fullEntry.Input,
              Placeholder: value.fullEntry.Placeholder,
              IsPassword: value.fullEntry.IsPassword,
              Borderless: value.fullEntry.Borderless,
              BackgroundColor: value.fullEntry.BackgroundColor,
              InputBackgroundColor: value.fullEntry.InputBackgroundColor,
              TextColor: value.fullEntry.TextColor,
              PlaceholderColor: value.fullEntry.PlaceholderColor,
              Padding: {
                top: value.fullEntry.Padding.top,
                right: value.fullEntry.Padding.right,
                bottom: value.fullEntry.Padding.bottom,
                left: value.fullEntry.Padding.left,
                HorizontalThickness:
                  value.fullEntry.Padding.left + value.fullEntry.Padding.right,
                VerticalThickness:
                  value.fullEntry.Padding.top + value.fullEntry.Padding.bottom,
              },
            },
          };
          let configuration_json = JSON.stringify(
            fullEntry?.configuration_json
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

        let expandingText;
        if (value.component === 'expandingText') {
          expandingText = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              HeaderText: value.expandingText.HeaderText,
              DetailText: value.expandingText.DetailText,
            },
          };
          console.log('New expandingText: ', expandingText);
          let configuration_json = JSON.stringify(
            expandingText?.configuration_json
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
    // New variable taking in the updated mapped array values
    let awesome = newArray(yep);
    ////////////////////////////
    ////////////////////////

    // Final varables to be input into the service call below
    let final = awesome;
    let finalHeader = awesomeHeader;

    // Debug purposes only
    console.log(
      'Visual Config: ',
      visualConfig,
      'Header Configs: ',
      finalHeader,
      'View Configs: ',
      final
    );

    // Service call to update the composition configurations
    this.es
      .sendConfig(finalHeader, final, visualConfig, true, name)
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
