import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

import { DragulaService } from 'ng2-dragula';
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
import { HeadlineService } from '@app/components/headline/service/headline.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  fontSize!: boolean;
  descriptionFontSize!: boolean;
  visualConfigSidebar: boolean = false;
  colorPalettes!: Colors[];
  luu: boolean = false;
  poo: boolean = false;
  yuu!: FormGroup;

  @ViewChild(MatAccordion) accordion!: MatAccordion;
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

  // PRIMARY form for entire editor
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
    descriptionSelector: this.es.createDescription({}),
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
    payload: this.fb.group({
      finalConfig: this.fb.array([]),
      viewConfig: this.fb.array([]),
    }),
  });

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

  constructor(
    public vps: ViewportService,
    public los: LayoutOptionsService,
    private es: EditorService,
    private fb: FormBuilder,
    public ess: EditSidebarService,
    private hs: HeadlineService
  ) {
    // this.dragulaService.createGroup('COMPONENTS', {
    //   invalid: (el, handle) => el!.classList.contains('sidebar'),
    //   removeOnSpill: true,
    // });
  }

  ngOnInit(): void {}

  // viewConfig getter to access FormArray in simple type-safe way.
  get viewConfig() {
    return this.form.controls['payload'].get('viewConfig') as FormArray;
  }

  get finalConfig() {
    return this.form.controls['payload'].get('finalConfig') as FormArray;
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

  edit(): void {
    this.visualConfigSidebar = true;
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
    this.visualConfigSidebar = false;
  }

  // Pushes the dynamically created FormGroup to the FormArray
  addHeadline(headline: any): any {
    this.viewConfig.push(this.es.createHeadline(headline));
  }

  addDescription(description: any): any {
    this.viewConfig.push(this.es.createDescription(description));

    console.log(this.form.value);
  }

  addGraphic(graphic: any): any {
    this.graphicConfig.push(this.es.createGraphic(graphic));

    console.log(this.form.value);
  }

  addButton(button: any): any {
    this.buttonConfig.push(this.es.createButton(button));

    console.log(this.form.value);
  }

  addIconButton(button: any): any {
    this.viewConfig.push(this.es.createIconButton(button));
  }

  addSlimEntry(input: any): any {
    this.slimEntryConfig.push(this.es.createSlimEntry(input));
  }

  addSpacer(spacer: any): any {
    this.spacerConfig.push(this.es.createSpacer(spacer));
  }

  // Removes the headline from the FormArray
  deleteHeadline(headlineIndex: number) {
    this.viewConfig.removeAt(headlineIndex);
  }

  // GET a new version of the component from the API
  changeVersion(version: any): void {
    this.form.updateValueAndValidity();
  }

  // Event from child form
  changeTextColor(color: any): void {
    this.form.updateValueAndValidity();
  }

  // Event from child form
  changeBackgroundColor(bgColor: any): void {
    this.form.updateValueAndValidity();
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

  // FINAL submit of full data set to Stencil
  onSubmit(): void {
    let visualConfig = this.form.get('visualConfig')!.value;
    let final = this.finalConfig.controls.concat(
      this.viewConfig.value,
      this.graphicConfig.value,
      this.buttonConfig.value,
      this.iconButtonConfig.value,
      this.slimEntryConfig.value,
      this.spacerConfig.value
    );

    console.log('Visual Config: ', visualConfig, 'View Config: ', final);

    this.es.sendConfig(final, visualConfig).subscribe(() => {});
  }

  ////////////////////////////////////////////////////
  // Utility functions to support viewport adjustments
  ////////////////////////////////////////////////////

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

  basicLayout(): void {
    this.los.basicLayoutOptions();
  }

  noFooterLayout(): void {
    this.los.noFooterLayoutOptions();
  }

  noHeaderLayout(): void {
    this.los.noHeaderLayoutOptions();
  }

  verticalLayout(): void {
    this.los.verticalLayoutOptions();
  }

  surveyLayout(): void {
    this.los.surveyLayoutOptions();
  }

  setAndroid(): void {
    this.vps.setAndroid();
  }

  setiPhone12(): void {
    this.vps.setiPhone12();
  }

  setiPhone11(): void {
    this.vps.setiPhone11();
  }

  desktopViewPort(): void {
    this.vps.setDesktop();
  }
}
