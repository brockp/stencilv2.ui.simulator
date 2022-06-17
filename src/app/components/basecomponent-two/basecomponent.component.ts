import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Colors } from '@app/services/colors/colors.interface';
import { ColorsService } from '@app/services/colors/colors.service';
import { environment } from 'src/environments/environment';
import { DescriptionService } from '../description/service/description.service';
import { HeadlineService } from '../headline/service/headline.service';
import { ImageService } from '../sign-up-graphic/service/image.service';

@Component({
  selector: 'app-basecomponenttwo',
  templateUrl: './basecomponent.component.html',
  styleUrls: ['./basecomponent.component.scss'],
})
export class BasecomponentTwoComponent implements OnInit {
  base: any;
  imgHost = environment.imgHost;
  colorPalettes!: Colors[];
  image = false;

  imageluu() {
    this.image = true;
  }

  notimageluu() {
    this.image = false;
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
  imageChanged = new EventEmitter();

  get components(): any {
    return (this.parent.get('finalConfig') as FormArray).controls;
  }
  constructor(
    private cs: ColorsService,
    private hs: HeadlineService,
    private ds: DescriptionService,
    private is: ImageService
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
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

  changeGraphic(source: any, i: number): void {
    const index = this.components.at(i);
    this.imageChanged.emit(index);
    this.imageChanged.emit(source);
    index.patchValue({
      Source: source,
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
          Width: objUpdate.Width,
          Height: objUpdate.Height,
          Source: objUpdate.Source,
          Padding: {
            top: objUpdate.Padding.top,
            right: objUpdate.Padding.right,
            bottom: objUpdate.Padding.bottom,
            left: objUpdate.Padding.left,
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
  }
}
