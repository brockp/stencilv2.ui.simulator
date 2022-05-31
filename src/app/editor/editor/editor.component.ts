import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { ViewportService } from '@app/services/viewport/viewport.service';
import { LayoutOptionsService } from '@app/services/layout-options/layout-options.service';
import { EditorService } from '@app/services/editor/editor.service';

import { Headline } from '@app/components/headline/model/headline.interface';
import { Description } from '@app/components/description/model/description.interface';
import { SignUpGraphic } from '@app/components/sign-up-graphic/model/sign-up-graphic.interface';
import { primaryButton } from '@app/components/primary-button/model/primary-button.interface';
import { iconButton } from '@app/components/icon-button/model/icon-button.interface';
import { SlimEntry } from '@app/components/text-input/model/slimentry.interface';
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

  headlines: Headline[] = [];
  headline!: Headline;

  descriptions: Description[] = [];
  description!: Description;

  graphics: SignUpGraphic[] = [];
  graphic!: SignUpGraphic;

  buttons: primaryButton[] = [];
  button!: primaryButton;

  iconButtons: iconButton[] = [];
  iconButton!: iconButton;

  slimEntries: SlimEntry[] = [];
  slimEntry!: SlimEntry;

  ////////////////////////////////////////////////////
  // PARENT form for entire editor
  ////////////////////////////////////////////////////

  form = this.fb.group({
    visualConfig: this.fb.group({
      BackgroundColor: '',
      BackgroundImage: '',
      Margin: this.fb.group({
        top: '',
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
    headlineSelector: this.es.createHeadline({}),
    headlineConfig: this.fb.array([]),
    descriptionSelector: this.es.createDescription({}),
    descriptionConfig: this.fb.array([]),
    graphicSelector: this.es.createGraphic({}),
    graphicConfig: this.fb.array([]),
    buttonSelector: this.es.createButton({}),
    buttonConfig: this.fb.array([]),
    iconButtonSelector: this.es.createIconButton({}),
    iconButtonConfig: this.fb.array([]),
    slimEntrySelector: this.es.createSlimEntry({}),
    slimEntryConfig: this.fb.array([]),
    spacerSelector: this.es.createSpacer({}),
    spacerConfig: this.fb.array([]),
    finalConfig: this.fb.array([]),
  });

  finalArray = this.es.finalArray;
  COMPONENTS = 'COMPONENTS';
  from = null;

  constructor(
    public vps: ViewportService,
    public los: LayoutOptionsService,
    private es: EditorService,
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

  addHeadline(headline: any): any {
    this.finalConfig.push(this.es.createHeadline(headline));
  }

  addDescription(description: any): any {
    this.finalConfig.push(this.es.createDescription(description));
  }

  addGraphic(graphic: any): any {
    this.graphicConfig.push(this.es.createGraphic(graphic));
  }

  addButton(button: any): any {
    this.finalConfig.push(this.es.createButton(button));
  }

  addIconButton(button: any): any {
    this.finalConfig.push(this.es.createIconButton(button));
  }

  addSlimEntry(input: any): any {
    this.slimEntryConfig.push(this.es.createSlimEntry(input));
  }

  addSpacer(spacer: any): any {
    this.spacerConfig.push(this.es.createSpacer(spacer));
  }

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

  updateComponent(data: any) {
    this.headlines = data;
    this.headlineConfig.valueChanges.subscribe((data) => {
      console.log('headline data changed');
      console.log(data);
    });

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
  arrpoo: any[] = [];
  onSubmit(event: any): void {
    let visualConfig = this.form.get('visualConfig')!.value;
    const f = this.form.get('finalConfig')!.value;
    const h = this.form.get('headlineConfig')!.value;
    const d = this.form.get('descriptionConfig')!.value;
    const i = this.form.get('iconButtonConfig')!.value;
    const p = this.form.get('buttonConfig')!.value;
    const g = this.form.get('graphicConfig')!.value;
    const s = this.form.get('spacerConfig')!.value;
    const se = this.form.get('slimEntryConfig')!.value;
    const yep = this.es.finalArray.concat(f, h, g, d, se, i, p, s);

    let newArray = (values: any) => {
      return values.map((value: any) => {
        let configuration_json = JSON.stringify(value.configuration_json);
        let newObj = {
          id: value.id + 1,
          component: value.component,
          configuration_json,
        };
        return newObj;
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
