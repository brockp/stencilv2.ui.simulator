import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { SignUpGraphic } from '@app/components/sign-up-graphic/model/sign-up-graphic.interface';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { ImageService } from '@app/components/sign-up-graphic/service/image.service';
import { HotToastService } from '@ngneat/hot-toast';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sign-up-graphic',
  templateUrl: './sign-up-graphic.component.html',
  styleUrls: ['./sign-up-graphic.component.scss'],
})
export class SignUpGraphicComponent implements OnInit {
  preview = 'Image';
  imgHost = environment.imgHost;
  @Input() id!: number;
  public signUpGraphic!: SignUpGraphic;

  signUpGraphicForm = this.fb.group({
    Version: '',
    Source: '',
    Width: '',
    Height: '',
    MinWidth: '',
    MinHeight: '',
    BackgroundColor: '',
    Padding: this.fb.group({
      top: '',
      right: '',
      bottom: '',
      left: '',
    }),
  });

  constructor(
    public ess: EditSidebarService,
    public is: ImageService,
    private renderer: Renderer2,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.id = this.id;

    this.is.getImageConfig(this.id).subscribe((data: any) => {
      this.signUpGraphic = data;
      console.log(this.signUpGraphic);
      this.setInitialValues();
    });
  }

  copy() {
    this.is.copy(this.signUpGraphic);
  }

  setInitialValues() {
    this.signUpGraphicForm.setValue({
      Version: this.signUpGraphic.Version,
      Source: this.signUpGraphic.Source,
      Width: this.signUpGraphic.Width,
      Height: this.signUpGraphic.Height,
      MinWidth: this.signUpGraphic.MinWidth,
      MinHeight: this.signUpGraphic.MinHeight,
      BackgroundColor: this.signUpGraphic.BackgroundColor,
      Padding: {
        top: this.signUpGraphic.Padding.top,
        right: this.signUpGraphic.Padding.right,
        bottom: this.signUpGraphic.Padding.bottom,
        left: this.signUpGraphic.Padding.left,
      },
    });
  }

  // Style object for ngStyle
  styleObject(): Object {
    return {
      width: this.signUpGraphic.Width + '%',
      height: this.signUpGraphic.Height + '%',
      'min-width': this.signUpGraphic.MinWidth + 'rem',
      'min-height': this.signUpGraphic.MinHeight + 'rem',
      'padding-top': this.signUpGraphic.Padding.top + 'px',
      'padding-right': this.signUpGraphic.Padding.right + 'px',
      'padding-bottom': this.signUpGraphic.Padding.bottom + 'px',
      'padding-left': this.signUpGraphic.Padding.left + 'px',
    };
  }

  edit(): void {
    this.ess.showSignUpGraphicEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  loadVersion(versionData: any): void {
    this.is.findImageConfig(versionData).subscribe((data: any) => {
      this.signUpGraphic = data;
      this.setInitialValues();
    });
  }

  changeGraphic(data: any): void {
    this.renderer.data, (this.signUpGraphic.Source = data);
    this.signUpGraphic.Source = data;
    this.signUpGraphicForm.get('Source')?.setValue(data);
  }

  // Event from child form
  changeBgColor(bgColorData: any): void {
    bgColorData = this.signUpGraphicForm.get('BackgroundColor')!.value;
  }

  // Event from child form
  changePadding(data: any) {
    data = this.signUpGraphicForm.get('Padding')!.value;
  }

  onSubmit(): void {
    this.signUpGraphic.Version = this.signUpGraphicForm.get('Version')!.value;
    this.signUpGraphic.Source = this.signUpGraphicForm.get('Source')!.value;
    this.signUpGraphic.Width =
      this.signUpGraphicForm.get('Width')!.value || '100';
    this.signUpGraphic.Height =
      this.signUpGraphicForm.get('Height')!.value || '100';
    this.signUpGraphic.MinWidth = this.signUpGraphicForm.get('MinWidth')!.value;
    this.signUpGraphic.MinHeight =
      this.signUpGraphicForm.get('MinHeight')!.value;
    this.signUpGraphic.BackgroundColor =
      this.signUpGraphicForm.get('BackgroundColor')!.value;
    this.signUpGraphic.Padding.top = this.signUpGraphicForm.get([
      'Padding',
      'top',
    ])!.value;
    this.signUpGraphic.Padding.right = this.signUpGraphicForm.get([
      'Padding',
      'right',
    ])!.value;
    this.signUpGraphic.Padding.bottom = this.signUpGraphicForm.get([
      'Padding',
      'bottom',
    ])!.value;
    this.signUpGraphic.Padding.left = this.signUpGraphicForm.get([
      'Padding',
      'left',
    ])!.value;

    this.is
      .updateImageConfig(this.id, this.signUpGraphicForm.value)
      .subscribe((res) => {
        console.log('Image updated!');
        this.closeSidebar();
      });

    console.log('<Image Context>: ', this.signUpGraphic);
  }
}
