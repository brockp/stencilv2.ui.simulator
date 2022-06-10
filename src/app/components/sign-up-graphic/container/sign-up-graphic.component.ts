import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { SignUpGraphic } from '@app/components/sign-up-graphic/model/sign-up-graphic.interface';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { ImageService } from '@app/components/sign-up-graphic/service/image.service';
import { environment } from '../../../../environments/environment';
import { Colors } from '@app/services/colors/colors.interface';
import { ColorsService } from '@app/services/colors/colors.service';

@Component({
  selector: 'app-sign-up-graphic',
  templateUrl: './sign-up-graphic.component.html',
  styleUrls: ['./sign-up-graphic.component.scss'],
})
export class SignUpGraphicComponent implements OnInit {
  imgHost = environment.imgHost;
  signUpGraphic!: SignUpGraphic;
  colorPalettes!: Colors[];

  @Input()
  payload!: FormGroup;

  @Input()
  parent!: FormGroup;

  @Input()
  COMPONENTS!: string;

  @Output()
  versionChanged = new EventEmitter();

  @Output()
  imageChanged = new EventEmitter();

  @Output()
  backgroundColorChanged = new EventEmitter();

  // GET viewConfig FormArray and assign to 'descriptions' for use in *ngFor in template
  get graphics(): any {
    return (this.parent.get('graphicConfig') as FormArray).controls;
  }

  constructor(
    public ess: EditSidebarService,
    public is: ImageService,
    private cs: ColorsService
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
  }

  update(i: number) {}

  cancel() {
    console.log('clicked off of editable graphic');
  }

  copy(i: number) {
    const index = this.graphics.at(i).value;
    this.is.copy(index);
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  loadVersion(version: any, i: number): void {
    const index = this.graphics.at(i);
    this.is.findImageConfig(version).subscribe((data: any) => {
      console.log(data);
      this.signUpGraphic = data;
      index.patchValue({
        Version: this.signUpGraphic.version,
        Source: this.signUpGraphic.configuration_json.Source,
        Width: this.signUpGraphic.configuration_json.Width,
        Height: this.signUpGraphic.configuration_json.Height,
        MinWidth: this.signUpGraphic.configuration_json.MinWidth,
        MinHeight: this.signUpGraphic.configuration_json.MinHeight,
        BackgroundColor: this.signUpGraphic.configuration_json.BackgroundColor,
        Padding: {
          top: this.signUpGraphic.configuration_json.Padding.top,
          right: this.signUpGraphic.configuration_json.Padding.right,
          bottom: this.signUpGraphic.configuration_json.Padding.bottom,
          left: this.signUpGraphic.configuration_json.Padding.left,
        },
      });
    });
    this.versionChanged.emit(index);
  }

  changeGraphic(source: any, i: number): void {
    const index = this.graphics.at(i);
    this.imageChanged.emit(index);
    this.imageChanged.emit(source);
    index.patchValue({
      configuration_json: {
        Source: source,
      },
    });
  }

  // EMIT a new background color of the component to the editor
  setBackgroundColor(color: any, i: number) {
    const index = this.graphics.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      configuration_json: {
        BackgroundColor: color,
      },
    });
  }

  // Event from child form
  changePadding(data: any) {
    data = this.parent.get('Padding')!.value;
  }

  // Saves component to API as individual component at current array index
  // ex: if index is a '1', then it will save to 'API/H1/1'
  saveComponent(i: number) {
    const index = this.graphics.at(i);
    const objUpdate = index.getRawValue();
    const configuration_json = JSON.stringify(objUpdate.configuration_json);
    const newObj = {
      id: objUpdate.id + 1,
      component: objUpdate.component,
      configuration_json,
    };

    console.log('GraphicConfig: ', newObj);

    this.is.updateImageConfig(i, newObj).subscribe(() => {});
    this.closeSidebar();
  }
}
