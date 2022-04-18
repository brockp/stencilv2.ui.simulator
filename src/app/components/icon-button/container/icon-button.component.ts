import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from 'src/app/services/edit-sidebar/edit-sidebar.service';
import { IconButtonService } from '@app/components/icon-button/service/icon-button.service';
import { iconButton } from '@app/components/icon-button/model/icon-button.interface';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @ViewChild('button') button!: ElementRef;
  preview = 'Icon Button';
  id!: number;
  public iconButton: iconButton = {
    id: this.id,
    Version: '',
    Width: '',
    CornerRadius: '',
    Text: '',
    TextColor: '',
    BackgroundColor: '',
    CommandName: '',
    CommandParameter: '',
    Icon: '',
    Padding: {
      top: '',
      right: '',
      bottom: '',
      left: '',
    },
    Margin: {
      top: '',
      right: '',
      bottom: '',
      left: '',
    },
  };

  constructor(
    public ess: EditSidebarService,
    private fb: FormBuilder,
    public ibs: IconButtonService
  ) {}

  iconButtonAltForm = this.fb.group({
    Version: '',
    Width: '',
    CornerRadius: '',
    Text: '',
    TextColor: '',
    BackgroundColor: '',
    CommandName: '',
    CommandParameter: '',
    Icon: '',
    Padding: this.fb.group({
      top: '',
      right: '',
      bottom: '',
      left: '',
    }),
    Margin: this.fb.group({
      top: '',
      right: '',
      bottom: '',
      left: '',
    }),
  });

  ngOnInit(): void {
    this.id = 1;
    // Get the component config from JSON
    this.ibs.getIconButton(this.id).subscribe((data: any) => {
      this.iconButton = data;
      console.log(this.iconButton);
      this.setInitialValues();
    });
  }

  copy() {
    this.ibs.copy(this.iconButton);
  }

  setInitialValues(): void {
    this.iconButtonAltForm.setValue({
      Version: this.iconButton.Version,
      Width: this.iconButton.Width,
      CornerRadius: this.iconButton.CornerRadius,
      Text: this.iconButton.Text,
      TextColor: this.iconButton.TextColor,
      BackgroundColor: this.iconButton.BackgroundColor,
      CommandName: this.iconButton.CommandName,
      CommandParameter: this.iconButton.CommandParameter,
      Icon: this.iconButton.Icon,
      Padding: {
        top: this.iconButton.Padding.top,
        right: this.iconButton.Padding.right,
        bottom: this.iconButton.Padding.bottom,
        left: this.iconButton.Padding.left,
      },
      Margin: {
        top: this.iconButton.Margin.top,
        right: this.iconButton.Margin.right,
        bottom: this.iconButton.Margin.bottom,
        left: this.iconButton.Margin.left,
      },
    });
  }

  // Style object for ngStyle
  iconButtonStyle(): Object {
    return {
      color: this.iconButton.TextColor,
      'background-color': this.iconButton.BackgroundColor,
      width: this.iconButton.Width + '%',
      'border-radius': this.iconButton.CornerRadius + 'px',
      'padding-top': this.iconButton.Padding.top + 'px',
      'padding-right': this.iconButton.Padding.right + 'px',
      'padding-bottom': this.iconButton.Padding.bottom + 'px',
      'padding-left': this.iconButton.Padding.left + 'px',
      'margin-top': this.iconButton.Margin.top + 'px',
      'margin-right': this.iconButton.Margin.right + 'px',
      'margin-bottom': this.iconButton.Margin.bottom + 'px',
      'margin-left': this.iconButton.Margin.left + 'px',
    };
  }

  loadVersion(versionData: any): void {
    this.ibs.findIconButton(versionData).subscribe((data: any) => {
      this.iconButton = data;
      this.setInitialValues();
    });
  }

  // changeMarginY(marginYData: any): void {
  //   this.renderer.data, (this.iconButton.marginY = marginYData);
  //   this.iconButton.marginY = marginYData;
  // }

  // Event from child form
  changeTextColor(textColorData: any): void {
    textColorData = this.iconButtonAltForm.get('TextColor')!.value;
  }

  changeBorderRadius(radiusData: any): void {
    radiusData = this.iconButtonAltForm.get('CornerRadius')!.value;
  }

  changeBgColor(bgColorData: any): void {
    bgColorData = this.iconButtonAltForm.get('BackgroundColor')!.value;
  }

  changeWidth(buttonWidthData: any): void {
    buttonWidthData = this.iconButtonAltForm.get('Width')!.value;
  }

  changeIcon(data: any): void {
    data = this.iconButtonAltForm.get('icon')?.setValue(data);
  }

  edit(): void {
    this.ess.showIconButtonEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  onSubmit(): void {
    this.iconButton.Version = this.iconButtonAltForm.get('Version')?.value;
    this.iconButton.Text = this.iconButtonAltForm.get('Text')?.value;
    this.iconButton.TextColor = this.iconButtonAltForm.get('TextColor')?.value;
    this.iconButton.Icon = this.iconButtonAltForm.get('Icon')?.value;
    // this.iconButton.marginY = this.iconButtonAltForm.get('marginY')?.value;
    this.iconButton.CornerRadius =
      this.iconButtonAltForm.get('CornerRadius')?.value;
    this.iconButton.BackgroundColor =
      this.iconButtonAltForm.get('BackgroundColor')?.value;
    this.iconButton.Width = this.iconButtonAltForm.get('Width')?.value;
    this.iconButton.CommandName =
      this.iconButtonAltForm.get('CommandName')?.value;
    this.iconButton.CommandParameter =
      this.iconButtonAltForm.get('CommandParameter')?.value;
    this.iconButton.Padding.top = this.iconButtonAltForm.get([
      'Padding',
      'top',
    ])?.value;
    this.iconButton.Padding.right = this.iconButtonAltForm.get([
      'Padding',
      'right',
    ])?.value;
    this.iconButton.Padding.bottom = this.iconButtonAltForm.get([
      'Padding',
      'bottom',
    ])?.value;
    this.iconButton.Padding.left = this.iconButtonAltForm.get([
      'Padding',
      'left',
    ])?.value;

    //Margin
    this.iconButton.Margin.top = this.iconButtonAltForm.get([
      'Margin',
      'top',
    ])?.value;
    this.iconButton.Margin.right = this.iconButtonAltForm.get([
      'Margin',
      'right',
    ])?.value;
    this.iconButton.Margin.bottom = this.iconButtonAltForm.get([
      'Margin',
      'bottom',
    ])?.value;
    this.iconButton.Margin.left = this.iconButtonAltForm.get([
      'Margin',
      'left',
    ])?.value;

    this.ibs
      .updateIconButton(this.iconButton.id, this.iconButtonAltForm.value)
      .subscribe((res) => {
        console.log('Primary Button Updated!');
        this.closeSidebar();
      });
  }
}
