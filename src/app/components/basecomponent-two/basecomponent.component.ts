import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormControlName,
  FormGroup,
} from '@angular/forms';
import { Colors } from '@app/services/colors/colors.interface';
import { ColorsService } from '@app/services/colors/colors.service';
import { EditorService } from '@app/services/editor/editor.service';
import { environment } from 'src/environments/environment';
import { AppHeaderService } from '@app/services/app-header/app-header.service';
import { DescriptionService } from '@app/services/description/description.service';
import { HeadlineService } from '@app/services/headline/headline.service';
import { IconButtonService } from '@app/services/icon-button/icon-button.service';
import { ImageService } from '@app/services/sign-up-graphic/image.service';
import { TextInputService } from '@app/services/text-input/text-input.service';
import { Options } from 'sortablejs';
import { SpacerService } from '@app/services/spacer/spacer.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-basecomponenttwo',
  templateUrl: './basecomponent.component.html',
  styleUrls: ['./basecomponent.component.scss'],
})
export class BasecomponentTwoComponent implements OnInit {
  base: any;
  imgHost = environment.imgHost;
  colorPalettes!: Colors[];
  icons!: any[];
  primaryButton = false;
  Text!: FormControlName;
  FontSize!: FormControlName;

  // Appheader specific properties
  DualColumnView!: string;
  Column1Config: string = 'flex-start';
  Column2Config: string = 'flex-end';
  TriColumnView!: boolean;

  options: Options = {
    disabled: false,
  };
  //////////////////////////////////////////////////////////////////////////
  // SERVICE BOOLEANS TO SHOW/HIDE SPECIFIC FORMARRAY INPUTS WITH *ngIf's //
  /////////////////////////////////////////////////////////////////////////

  inputEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.plainTextEdit = false;
    this.es.input = true;
    this.es.dropdown = false;
    this.es.appHeader = false;
    this.es.slimEditorEdit = false;
    this.es.spacer = false;
    this.es.header = false;
    this.options = {
      disabled: true,
    };
  }

  slimEditorEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.plainTextEdit = false;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = false;
    this.es.slimEditorEdit = true;
    this.es.spacer = false;
    this.es.header = false;
    this.options = {
      disabled: true,
    };
  }

  appHeaderEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.plainTextEdit = false;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = true;
    this.es.slimEditorEdit = false;
    this.es.spacer = false;
    this.es.header = false;
    this.options = {
      disabled: true,
    };
  }

  dropdownEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.plainTextEdit = false;
    this.es.input = false;
    this.es.dropdown = true;
    this.es.appHeader = false;
    this.es.slimEditorEdit = false;
    this.es.spacer = false;
    this.es.header = false;
    this.options = {
      disabled: true,
    };
  }

  descriptionEdit() {
    this.es.image = false;
    this.es.description = true;
    this.es.plainTextEdit = false;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = false;
    this.es.slimEditorEdit = false;
    this.es.spacer = false;
    this.es.header = false;
    this.options = {
      disabled: true,
    };
  }

  plainTextEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.plainTextEdit = true;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = false;
    this.es.slimEditorEdit = false;
    this.es.spacer = false;
    this.es.header = false;
    this.options = {
      disabled: true,
    };
  }

  imageluu() {
    this.es.image = true;
    this.es.description = false;
    this.es.plainTextEdit = false;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = false;
    this.es.slimEditorEdit = false;
    this.es.spacer = false;
    this.es.header = false;
    this.options = {
      disabled: true,
    };
  }

  spacerEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.plainTextEdit = false;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = false;
    this.es.slimEditorEdit = false;
    this.es.spacer = true;
    this.es.header = false;
    this.options = {
      disabled: true,
    };
  }

  headerEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.plainTextEdit = false;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = false;
    this.es.slimEditorEdit = false;
    this.es.spacer = false;
    this.es.header = true;
    this.options = {
      disabled: true,
    };
  }

  /////////////////////////////////////////////////////////////////////////////
  // INPUTS AND OUTPUTS TO SPEAK WITH PARENT COMPONENT (EDITOR.COMPONENT.TS) //
  ////////////////////////////////////////////////////////////////////////////

  @Input()
  parent!: FormGroup;

  @Output()
  textColorChanged = new EventEmitter();

  @Output()
  backgroundColorChanged = new EventEmitter();

  @Output()
  textAlignmentChanged = new EventEmitter();

  @Output()
  borderRadiusChanged = new EventEmitter();

  @Output()
  imageChanged = new EventEmitter();

  @Output()
  iconChanged = new EventEmitter();

  @Output()
  leftIconChanged = new EventEmitter();

  @Output()
  rightIconChanged = new EventEmitter();

  @Output()
  logoChanged = new EventEmitter();

  //////////////////////////////////////////////////////////
  // GETTERS FOR DIFFERENT FORM ARRAYS, USED IN *ngFor's //
  /////////////////////////////////////////////////////////

  get components(): any {
    return (this.parent.get('finalConfig') as FormArray).controls;
  }

  get headers(): any {
    return (this.parent.get('headerConfig') as FormArray).controls;
  }

  get array(): any {
    return this.parent.get('finalConfig') as FormArray;
  }

  constructor(
    private cs: ColorsService,
    private hs: HeadlineService,
    private ds: DescriptionService,
    private is: ImageService,
    private ipbs: IconButtonService,
    private ses: TextInputService,
    private ahs: AppHeaderService,
    public es: EditorService,
    private ss: SpacerService
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
    this.icons = this.cs.getAppIcons();
  }

  //////////////////////////////////////////////////////////
  // REACTIVE FORM EMIT FUNCTIONS FOR SELECTABLE ELEMENTS //
  /////////////////////////////////////////////////////////

  setIcon(icon: string, i: number) {
    const index = this.headers.at(i);
    this.leftIconChanged.emit(index);
    this.leftIconChanged.emit(icon);
    index.patchValue({
      appHeader: {
        leftIcon: icon,
      },
    });
  }

  setRightIcon(icon: string, i: number) {
    const index = this.headers.at(i);
    this.rightIconChanged.emit(index);
    this.rightIconChanged.emit(icon);
    index.patchValue({
      appHeader: {
        rightIcon: icon,
      },
    });
  }

  setLogo(logo: string, i: number) {
    const index = this.headers.at(i);
    this.logoChanged.emit(index);
    this.logoChanged.emit(logo);
    index.patchValue({
      appHeader: {
        logo: logo,
      },
    });
  }

  setTextColor(color: any, i: number) {
    const index = this.components.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      TextColor: color,
    });
  }

  setHeaderTextColor(color: any, i: number) {
    const index = this.components.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      TextColor: color,
    });
  }

  setplainTextColor(color: any, i: number) {
    const index = this.components.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      plainText: { TextColor: color },
    });
  }

  setSlimeditorTextColor(color: any, i: number) {
    const index = this.components.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      slimEditor: { TextColor: color, PlaceholderColor: color },
    });
  }

  setDropdownTextColor(color: any, i: number) {
    const index = this.components.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      dropDown: { TextColor: color },
    });
  }

  setSlimentryTextColor(color: any, i: number) {
    const index = this.components.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      slimEntry: { TextColor: color, PlaceholderColor: color },
    });
  }

  setBackgroundColor(color: any, i: number) {
    const index = this.components.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      BackgroundColor: color,
    });
  }

  setPlaintextBackgroundColor(color: any, i: number) {
    const index = this.components.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      plainText: { BackgroundColor: color },
    });
  }

  setDropdownBackgroundColor(color: any, i: number) {
    const index = this.components.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      dropDown: { BackgroundColor: color },
    });
  }

  setSlimentryBackgroundColor(color: any, i: number) {
    const index = this.components.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      slimEntry: { BackgroundColor: color },
    });
  }

  setSlimeditorBackgroundColor(color: any, i: number) {
    const index = this.components.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      slimEditor: { BackgroundColor: color },
    });
  }

  setInputBackgroundColor(color: any, i: number) {
    const index = this.components.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      slimEntry: { InputBackgroundColor: color },
    });
  }

  setSlimeditorInputBackgroundColor(color: any, i: number) {
    const index = this.components.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      slimEditor: { InputBackgroundColor: color },
    });
  }

  setSpacerBackgroundColor(color: any, i: number) {
    const index = this.components.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      spacer: { BackgroundColor: color },
    });
  }

  setTextAlignment(alignment: any, i: number) {
    const index = this.components.at(i);
    this.textAlignmentChanged.emit(index);
    this.textAlignmentChanged.emit(alignment);
    index.patchValue({
      TextAlignment: alignment,
    });
  }

  changeGraphic(source: any, i: number): void {
    const index = this.components.at(i);
    this.imageChanged.emit(index);
    this.imageChanged.emit(source);
    index.patchValue({
      Source: source,
    });
  }

  changeBorderRadius(radius: any, i: number): void {
    const index = this.components.at(i);
    this.borderRadiusChanged.emit(index);
    this.borderRadiusChanged.emit(radius);
    index.patchValue({
      CornerRadius: radius,
    });
  }

  changeIcon(icon: any, i: number): void {
    const index = this.components.at(i);
    this.iconChanged.emit(index);
    this.iconChanged.emit(icon);
    index.patchValue({
      Icon: icon,
    });
  }

  //////////////////////////////////////////////////////////
  // EDITABLE UPDATE, CANCEL & SAVE INDIVIDUAL COMPONENT //
  /////////////////////////////////////////////////////////

  update(i: number) {
    const headerIndex = this.headers.at(i);

    // TODO: this getRawValue pops an error after each update not in header, research and fix.
    // const headerUpdate = headerIndex.getRawValue();

    const index = this.components.at(i);
    const objUpdate = index.getRawValue();

    // headerIndex.patchValue({ headerUpdate });
    index.patchValue({ objUpdate });

    // Resets the ability to drag components
    this.options = {
      disabled: false,
    };
  }

  cancel() {
    console.log('clicked off editable component');
    // Resets the ability to drag components
    this.options = {
      disabled: false,
    };
  }

  saveComponent(i: number) {
    const index = this.components.at(i);
    const objUpdate = index.getRawValue();
    let h1Obj;
    let h2Obj;
    let h3Obj;
    let imageObj;
    let primaryButtonObj;
    let slimEditorObj;
    let slimEntryObj;
    let dropDownObj;
    let appHeaderObj;
    let spacerObj;

    if (objUpdate.component === 'h1') {
      h1Obj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          Text: objUpdate.Text,
          TextColor: objUpdate.TextColor,
          BackgroundColor: objUpdate.BackgroundColor,
          Padding: {
            top: objUpdate.Padding.top,
            right: objUpdate.Padding.right,
            bottom: objUpdate.Padding.bottom,
            left: objUpdate.Padding.left,
          },
        },
      };

      let configuration_json = JSON.stringify(h1Obj?.configuration_json);
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New h1: ', newObj);
      this.hs.updateHeadlineConfig(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'h2') {
      h2Obj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          Text: objUpdate.Text,
          TextColor: objUpdate.TextColor,
          BackgroundColor: objUpdate.BackgroundColor,
          Padding: {
            top: objUpdate.Padding.top,
            right: objUpdate.Padding.right,
            bottom: objUpdate.Padding.bottom,
            left: objUpdate.Padding.left,
          },
        },
      };

      let configuration_json = JSON.stringify(h2Obj?.configuration_json);
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New h2: ', newObj);
      this.hs.updateHeadlinTwoConfig(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'h3') {
      h3Obj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          Text: objUpdate.Text,
          TextColor: objUpdate.TextColor,
          BackgroundColor: objUpdate.BackgroundColor,
          Padding: {
            top: objUpdate.Padding.top,
            right: objUpdate.Padding.right,
            bottom: objUpdate.Padding.bottom,
            left: objUpdate.Padding.left,
          },
        },
      };

      let configuration_json = JSON.stringify(h3Obj?.configuration_json);
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New h3: ', newObj);
      this.hs.updateHeadlineThreeConfig(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'image') {
      imageObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          Source: objUpdate.Source,
          Width: objUpdate.ImageWidth,
          Height: objUpdate.ImageHeight,
          ImageWidth: objUpdate.ImageWidth,
          ImageHeight: objUpdate.ImageHeight,
          BackgroundColor: objUpdate.BackgroundColor,
          Padding: {
            top: objUpdate.Padding.top,
            right: objUpdate.Padding.right,
            bottom: objUpdate.Padding.bottom,
            left: objUpdate.Padding.left,
          },
          FullBleedHorizontal: null,
          CommandName: objUpdate.CommandName,
          CommandParameter: objUpdate.CommandParameter,
        },
      };

      let configuration_json = JSON.stringify(imageObj?.configuration_json);
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New image: ', newObj);
      this.is.updateImageConfig(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'primaryButton') {
      primaryButtonObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          Text: objUpdate.Text,
          CommandName: objUpdate.CommandName,
          CommandParameter: objUpdate.CommandParameter,
          BackgroundColor: objUpdate.BackgroundColor,
          CornerRadius: objUpdate.CornerRadius,
          Icon: objUpdate.Icon,
          ShowIcon: objUpdate.ShowIcon,
          Padding: {
            top: objUpdate.Padding.top,
            right: objUpdate.Padding.right,
            bottom: objUpdate.Padding.bottom,
            left: objUpdate.Padding.left,
          },
          Margin: {
            top: objUpdate.Margin.top,
            right: objUpdate.Margin.right,
            bottom: objUpdate.Margin.bottom,
            left: objUpdate.Margin.left,
          },
        },
      };

      let configuration_json = JSON.stringify(
        primaryButtonObj?.configuration_json
      );
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New primary button: ', newObj);
      this.ipbs.updateIconButton(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'slimEntry') {
      slimEntryObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          Input: objUpdate.slimEntry.Input,
          Placeholder: objUpdate.slimEntry.Placeholder,
          IsPassword: objUpdate.slimEntry.IsPassword,
          Borderless: objUpdate.slimEntry.Borderless,
          BackgroundColor: objUpdate.slimEntry.BackgroundColor,
          InputBackgroundColor: objUpdate.slimEntry.InputBackgroundColor,
          TextColor: objUpdate.ButtonTextColor,
          PlaceholderColor: objUpdate.slimEntry.PlaceholderColor,
          Padding: {
            top: objUpdate.slimEntry.Padding.top,
            right: objUpdate.slimEntry.Padding.right,
            bottom: objUpdate.slimEntry.Padding.bottom,
            left: objUpdate.slimEntry.Padding.left,
            HorizontalThickness:
              objUpdate.Padding.left + objUpdate.Padding.right,
            VerticalThickness: objUpdate.Padding.top + objUpdate.Padding.bottom,
          },
        },
      };

      let configuration_json = JSON.stringify(slimEntryObj?.configuration_json);
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New slim entry: ', newObj);
      this.ses.updateSlimEntry(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'slimEditor') {
      slimEditorObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          Label: objUpdate.slimEditor.Label,
          Input: objUpdate.slimEditor.Input,
          Placeholder: objUpdate.slimEditor.Placeholder,
          BackgroundColor: objUpdate.slimEditor.BackgroundColor,
          InputBackgroundColor: objUpdate.slimEditor.InputBackgroundColor,
          TextColor: objUpdate.slimEditor.TextColor,
          PlaceholderColor: objUpdate.slimEditor.PlaceholderColor,
          Margin: {
            top: objUpdate.slimEditor.Margin.top,
            right: objUpdate.slimEditor.Margin.right,
            bottom: objUpdate.slimEditor.Margin.bottom,
            left: objUpdate.slimEditor.Margin.left,
            HorizontalThickness: objUpdate.Margin.left + objUpdate.Margin.right,
            VerticalThickness: objUpdate.Margin.top + objUpdate.Margin.bottom,
          },
          Padding: {
            top: objUpdate.slimEditor.Padding.top,
            right: objUpdate.slimEditor.Padding.right,
            bottom: objUpdate.slimEditor.Padding.bottom,
            left: objUpdate.slimEditor.Padding.left,
            HorizontalThickness:
              objUpdate.Padding.left + objUpdate.Padding.right,
            VerticalThickness: objUpdate.Padding.top + objUpdate.Padding.bottom,
          },
        },
      };

      let configuration_json = JSON.stringify(
        slimEditorObj?.configuration_json
      );
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New slim editor: ', newObj);
      // TODO: Make slim editor service and update call
      this.ses.updateSlimEntry(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'dropdown') {
      dropDownObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          IsRequired: objUpdate.dropDown.IsRequired,
          GroupName: objUpdate.dropDown.GroupName,
          Borderless: objUpdate.dropDown.Borderless,
          FieldName: objUpdate.dropDown.FieldName,
          OptionOne: objUpdate.dropDown.OptionOne,
          OptionTwo: objUpdate.dropDown.OptionTwo,
          Padding: {
            top: objUpdate.dropDown.Padding.top,
            right: objUpdate.dropDown.Padding.right,
            bottom: objUpdate.dropDown.Padding.bottom,
            left: objUpdate.dropDown.Padding.left,
          },
          Margin: {
            top: objUpdate.Margin.top,
            right: objUpdate.Margin.right,
            bottom: objUpdate.Margin.bottom,
            left: objUpdate.Margin.left,
          },
        },
      };

      let configuration_json = JSON.stringify(dropDownObj?.configuration_json);
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New slim entry: ', newObj);
      this.ses.updateSlimEntry(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'appHeader') {
      appHeaderObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          leftIcon: objUpdate.appHeader.leftIcon,
          rightIcon: objUpdate.appHeader.rightIcon,
          logo: objUpdate.appHeader.logo,
          Padding: {
            top: objUpdate.Padding.top,
            right: objUpdate.Padding.right,
            bottom: objUpdate.Padding.bottom,
            left: objUpdate.Padding.left,
          },
        },
      };

      let configuration_json = JSON.stringify(appHeaderObj?.configuration_json);
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New app header: ', newObj);
      this.ahs.updateHeadernConfig(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'spacer') {
      spacerObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          Height: objUpdate.spacer.Height,
          BackgroundColor: objUpdate.spacer.BackgroundColor,
        },
      };

      let configuration_json = JSON.stringify(spacerObj?.configuration_json);
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New spacer: ', newObj);
      this.ss.updateSpacer(i, newObj).subscribe(() => {});
    }
  }
}
