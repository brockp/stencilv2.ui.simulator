import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { ViewportService } from '@app/services/viewport/viewport.service';
import { LayoutOptionsService } from '@app/services/layout-options/layout-options.service';
import { EditorService } from '@app/services/editor/editor.service';

import { environment } from 'src/environments/environment';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { Colors } from '@app/services/colors/colors.interface';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';

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
        right: '',
        bottom: '',
        left: '',
      }),
      Padding: this.fb.group({
        top: '',
        right: '',
        bottom: '',
        left: '',
      }),
    }),
    baseComponentSelector: this.es.createBaseComponent({}),
    baseComponentTwoSelector: this.es.createBaseComponentTwo({}),
    primaryButtonSelector: this.es.createDynamicButton({}),
    inputSelector: this.es.createDynamicInput({}),
    dropdownSelector: this.es.createDynamicDropdown({}),
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
    private dragulaService: DragulaService
  ) {
    this.dragulaService.createGroup(this.COMPONENTS, {
      removeOnSpill: true,
    });
    this.dragulaService.drop(this.COMPONENTS).subscribe((element) => {});
  }

  ngOnInit(): void {}

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

  get headlineConfig() {
    return this.form.get('headlineConfig') as FormArray;
  }

  get descriptionConfig() {
    return this.form.get('descriptionConfig') as FormArray;
  }

  get graphicConfig() {
    return this.form.get('graphicConfig') as FormArray;
  }

  get buttonConfig() {
    return this.form.get('buttonConfig') as FormArray;
  }

  get iconButtonConfig() {
    return this.form.get('iconButtonConfig') as FormArray;
  }

  get slimEntryConfig() {
    return this.form.get('slimEntryConfig') as FormArray;
  }

  get spacerConfig() {
    return this.form.get('spacerConfig') as FormArray;
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

  addDropdown(dropdown: any): any {
    this.finalConfig.push(this.es.createDynamicDropdown(dropdown));
  }

  //////

  // Removes the headline from the FormArray
  deleteHeadline(headlineIndex: number) {
    this.finalConfig.removeAt(headlineIndex);
  }

  // TODO: GET RID OF
  changeVersion(version: any): void {
    this.form.updateValueAndValidity();
  }

  // TODO: GET RID OF
  changeTextColor(color: any): void {
    this.form.updateValueAndValidity();
  }

  // TODO: GET RID OF
  changeBackgroundColor(bgColor: any): void {
    this.form.updateValueAndValidity();
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
              TextSize: value.TextSize,
              TextColor: value.TextColor,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
              },
            },
          };
          console.log('No background: ', h1);
          let configuration_json = JSON.stringify(h1?.configuration_json);
          let newObj = {
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
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
              TextSize: value.TextSize,
              TextColor: value.TextColor,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
              },
            },
          };
          console.log('No background: ', h2);
          let configuration_json = JSON.stringify(h2?.configuration_json);
          let newObj = {
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
          };
          return newObj;
        }

        let image;
        if (value.component === 'image') {
          image = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              BackgroundColor: value.BackgroundColor,
              Width: value.Width,
              Height: value.Height,
              Source: value.Source,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
              },
            },
          };
          let configuration_json = JSON.stringify(image?.configuration_json);
          let newObj = {
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
          };
          return newObj;
        }

        let primaryButton;
        if (value.component === 'primaryButton') {
          primaryButton = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              BackgroundColor: value.BackgroundColor,
              Width: value.Width,
              Height: value.Height,
              CornerRadius: value.CornerRadius,
              ButtonText: value.ButtonText,
              Padding: {
                top: value.Padding.top,
                right: value.Padding.right,
                bottom: value.Padding.bottom,
                left: value.Padding.left,
              },
              Margin: {
                top: value.Margin.top,
                right: value.Margin.right,
                bottom: value.Margin.bottom,
                left: value.Margin.left,
              },
            },
          };
          let configuration_json = JSON.stringify(
            primaryButton?.configuration_json
          );
          let newObj = {
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
          };
          return newObj;
        }

        let slimEntry;
        if (value.component === 'slimEntry') {
          slimEntry = {
            id: value.id + 1,
            component: value.component,
            configuration_json: {
              TextColor: value.ButtonTextColor,
              IsRequired: value.slimEntry.IsRequired,
              IsPassword: value.slimEntry.IsPassword,
              GroupName: value.slimEntry.GroupName,
              Borderless: value.slimEntry.Borderless,
              FieldName: value.slimEntry.FieldName,
              Placeholder: value.slimEntry.Placeholder,
              Type: value.slimEntry.Type,
              Padding: {
                top: value.slimEntry.Padding.top,
                right: value.slimEntry.Padding.right,
                bottom: value.slimEntry.Padding.bottom,
                left: value.slimEntry.Padding.left,
              },
              Margin: {
                top: value.Margin.top,
                right: value.Margin.right,
                bottom: value.Margin.bottom,
                left: value.Margin.left,
              },
            },
          };
          let configuration_json = JSON.stringify(
            slimEntry?.configuration_json
          );
          let newObj = {
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
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
              },
              Margin: {
                top: value.Margin.top,
                right: value.Margin.right,
                bottom: value.Margin.bottom,
                left: value.Margin.left,
              },
            },
          };
          let configuration_json = JSON.stringify(dropDown?.configuration_json);
          let newObj = {
            id: value.id + 1,
            component: value.component,
            configuration_json: configuration_json,
          };
          return newObj;
        }
      });
    };

    let awesome = newArray(yep);
    console.log('final array: ', awesome);

    let final = awesome;
    console.log('Visual Config: ', visualConfig, 'View Configs: ', final);

    this.es.sendConfig(final, visualConfig, true).subscribe(() => {});
  }

  ////////////////////////////////////////////////////
  // Destroy all subscriptions
  ////////////////////////////////////////////////////

  ngOnDestroy() {
    // destroy all the subscriptions at once
    this.subs.unsubscribe();
  }
}
