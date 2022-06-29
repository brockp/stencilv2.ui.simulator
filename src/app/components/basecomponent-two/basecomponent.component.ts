import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
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

  // Appheader specific properties
  DualColumnView!: string;
  Column1Config: string = 'flex-start';
  Column2Config: string = 'flex-end';
  TriColumnView!: boolean;

  inputEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.input = true;
    this.es.dropdown = false;
    this.es.appHeader = false;
  }

  appHeaderEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = true;
  }

  dropdownEdit() {
    this.es.image = false;
    this.es.description = false;
    this.es.input = false;
    this.es.dropdown = true;
    this.es.appHeader = false;
  }

  descriptionEdit() {
    this.es.image = false;
    this.es.description = true;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = false;
  }

  imageluu() {
    this.es.image = true;
    this.es.description = false;
    this.es.input = false;
    this.es.dropdown = false;
    this.es.appHeader = false;
  }

  notimageluu() {
    this.es.image = false;
  }

  @Input()
  parent!: FormGroup;

  @Input()
  COMPONENTS!: string;

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

  get components(): any {
    return (this.parent.get('finalConfig') as FormArray).controls;
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
    public es: EditorService
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
    this.icons = this.cs.getAppIcons();
  }

  setIcon(icon: string, i: number) {
    const index = this.components.at(i);
    this.leftIconChanged.emit(index);
    this.leftIconChanged.emit(icon);
    index.patchValue({
      appHeader: {
        leftIcon: icon,
      },
    });
  }

  setRightIcon(icon: string, i: number) {
    const index = this.components.at(i);
    this.rightIconChanged.emit(index);
    this.rightIconChanged.emit(icon);
    index.patchValue({
      appHeader: {
        rightIcon: icon,
      },
    });
  }

  setLogo(logo: string, i: number) {
    const index = this.components.at(i);
    this.logoChanged.emit(index);
    this.logoChanged.emit(logo);
    index.patchValue({
      appHeader: {
        logo: logo,
      },
    });
  }

  // EMIT a new text color of the component to the editor
  setTextColor(color: any, i: number) {
    const index = this.components.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      TextColor: color,
    });
  }

  // EMIT a new background color of the component to the editor
  setBackgroundColor(color: any, i: number) {
    const index = this.components.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      BackgroundColor: color,
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

  update(i: number) {
    const index = this.components.at(i);
    const objUpdate = index.getRawValue();
    console.log(objUpdate);
    index.patchValue({ objUpdate });
  }

  cancel() {
    console.log('clicked off editable component');
  }

  saveComponent(i: number) {
    const index = this.components.at(i);
    const objUpdate = index.getRawValue();
    let h1Obj;
    let h2Obj;
    let imageObj;
    let primaryButtonObj;
    let iconButtonObj;
    let slimEntryObj;
    let dropDownObj;
    let appHeaderObj;

    if (objUpdate.component === 'h1') {
      h1Obj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          Text: objUpdate.Text,
          TextSize: objUpdate.TextSize,
          TextColor: objUpdate.TextColor,
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
          TextSize: objUpdate.TextSize,
          TextColor: objUpdate.TextColor,
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
      this.ds.updateDescriptionConfig(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'image') {
      imageObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          BackgroundColor: objUpdate.BackgroundColor,
          Width: objUpdate.ImageWidth,
          Height: objUpdate.Height,
          Source: objUpdate.Source,
          Margin: {
            top: objUpdate.Margin.top,
            right: objUpdate.Margin.right,
            bottom: objUpdate.Margin.bottom,
            left: objUpdate.Margin.left,
          },
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
          BackgroundColor: objUpdate.BackgroundColor,
          Width: objUpdate.Width,
          Height: objUpdate.Height,
          CornerRadius: objUpdate.CornerRadius,
          Text: objUpdate.ButtonText,
          TextColor: objUpdate.ButtonTextColor,
          Icon: objUpdate.Icon,
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

    if (objUpdate.component === 'iconButton') {
      iconButtonObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          BackgroundColor: objUpdate.BackgroundColor,
          Width: objUpdate.Width,
          Height: objUpdate.Height,
          CornerRadius: objUpdate.CornerRadius,
          Text: objUpdate.ButtonText,
          TextColor: objUpdate.ButtonTextColor,
          Icon: objUpdate.Icon,
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
        iconButtonObj?.configuration_json
      );
      let newObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: configuration_json,
      };
      console.log('New icon button: ', newObj);
      this.ipbs.updateIconButton(i, newObj).subscribe(() => {});
    }

    if (objUpdate.component === 'slimEntry') {
      slimEntryObj = {
        id: objUpdate.id + 1,
        component: objUpdate.component,
        configuration_json: {
          TextColor: objUpdate.ButtonTextColor,
          IsRequired: objUpdate.slimEntry.IsRequired,
          IsPassword: objUpdate.slimEntry.IsPassword,
          GroupName: objUpdate.slimEntry.GroupName,
          Borderless: objUpdate.slimEntry.Borderless,
          FieldName: objUpdate.slimEntry.FieldName,
          Placeholder: objUpdate.slimEntry.Placeholder,
          Type: objUpdate.slimEntry.Type,
          Padding: {
            top: objUpdate.slimEntry.Padding.top,
            right: objUpdate.slimEntry.Padding.right,
            bottom: objUpdate.slimEntry.Padding.bottom,
            left: objUpdate.slimEntry.Padding.left,
          },
          Margin: {
            top: objUpdate.Margin.top,
            right: objUpdate.Margin.right,
            bottom: objUpdate.Margin.bottom,
            left: objUpdate.Margin.left,
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
  }
}
