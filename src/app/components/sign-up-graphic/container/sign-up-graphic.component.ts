import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
  signUpGraphic!: SignUpGraphic;

  @Input()
  payload!: FormGroup;

  @Input()
  parent!: FormGroup;

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
    private renderer: Renderer2,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  copy(i: number) {
    const index = this.graphics.at(i).value;
    console.log(index);
    this.is.copy(index);
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

  edit(i: number): void {
    this.ess.showSignUpGraphicEdit();
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
    });
    this.versionChanged.emit(index);
  }

  changeGraphic(source: any, i: number): void {
    // this.renderer.data, (this.signUpGraphic.Source = data);
    // this.signUpGraphic.Source = data;
    // this.parent.get('Source')?.setValue(data);

    const index = this.graphics.at(i);
    this.imageChanged.emit(index);
    this.imageChanged.emit(source);
    index.patchValue({
      Source: source,
    });
  }

  // EMIT a new background color of the component to the editor
  setBackgroundColor(color: any, i: number) {
    const index = this.graphics.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      BackgroundColor: color,
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
    console.log(i);
    this.is.updateImageConfig(i, index.value).subscribe(() => {});
    this.closeSidebar();
  }

  // onSubmit(): void {
  //   this.signUpGraphic.Version = this.signUpGraphicForm.get('Version')!.value;
  //   this.signUpGraphic.Source = this.signUpGraphicForm.get('Source')!.value;
  //   this.signUpGraphic.Width =
  //     this.signUpGraphicForm.get('Width')!.value || '100';
  //   this.signUpGraphic.Height =
  //     this.signUpGraphicForm.get('Height')!.value || '100';
  //   this.signUpGraphic.MinWidth = this.signUpGraphicForm.get('MinWidth')!.value;
  //   this.signUpGraphic.MinHeight =
  //     this.signUpGraphicForm.get('MinHeight')!.value;
  //   this.signUpGraphic.BackgroundColor =
  //     this.signUpGraphicForm.get('BackgroundColor')!.value;
  //   this.signUpGraphic.Padding.top = this.signUpGraphicForm.get([
  //     'Padding',
  //     'top',
  //   ])!.value;
  //   this.signUpGraphic.Padding.right = this.signUpGraphicForm.get([
  //     'Padding',
  //     'right',
  //   ])!.value;
  //   this.signUpGraphic.Padding.bottom = this.signUpGraphicForm.get([
  //     'Padding',
  //     'bottom',
  //   ])!.value;
  //   this.signUpGraphic.Padding.left = this.signUpGraphicForm.get([
  //     'Padding',
  //     'left',
  //   ])!.value;

  //   this.is
  //     .updateImageConfig(this.id, this.signUpGraphicForm.value)
  //     .subscribe((res) => {
  //       console.log('Image updated!');
  //       this.closeSidebar();
  //     });

  //   console.log('<Image Context>: ', this.signUpGraphic);
  // }
}
