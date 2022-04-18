import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from 'src/app/services/edit-sidebar/edit-sidebar.service';
import { primaryButton } from '@app/components/primary-button/model/primary-button.interface';
import { PrimaryButtonService } from '@app/components/primary-button/service/primary-button.service';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {
  @ViewChild('button') button!: ElementRef;
  preview = 'Primary Button';
  @Input() id!: number;
  public primaryButton: primaryButton = {
    id: null,
    Version: '',
    Width: '',
    CornerRadius: '',
    Text: '',
    TextColor: '',
    CommandName: '',
    CommandParameter: '',
    BackgroundColor: '',
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
    public ibs: PrimaryButtonService
  ) {}

  primaryButtonForm = this.fb.group({
    Version: '',
    Width: '',
    CornerRadius: '',
    Text: '',
    TextColor: '',
    BackgroundColor: '',
    CommandName: '',
    CommandParameter: '',
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
    this.id = this.id;

    // Get the component config from JSON
    this.ibs.getPrimaryButton(this.id).subscribe((data: any) => {
      this.primaryButton = data;
      console.log(this.primaryButton);
      this.setInitialValues();
    });
  }

  copy() {
    this.ibs.copy(this.primaryButton);
  }

  setInitialValues(): void {
    this.primaryButtonForm.setValue({
      Version: this.primaryButton.Version,
      Width: this.primaryButton.Width,
      CornerRadius: this.primaryButton.CornerRadius,
      Text: this.primaryButton.Text,
      TextColor: this.primaryButton.TextColor,
      BackgroundColor: this.primaryButton.BackgroundColor,
      CommandName: this.primaryButton.CommandName,
      CommandParameter: this.primaryButton.CommandParameter,
      Padding: {
        top: this.primaryButton.Padding.top,
        right: this.primaryButton.Padding.right,
        bottom: this.primaryButton.Padding.bottom,
        left: this.primaryButton.Padding.left,
      },
      Margin: {
        top: this.primaryButton.Margin.top,
        right: this.primaryButton.Margin.right,
        bottom: this.primaryButton.Margin.bottom,
        left: this.primaryButton.Margin.left,
      },
    });
  }

  // Style object for ngStyle
  iconButtonStyle(): Object {
    return {
      color: this.primaryButton.TextColor,
      'background-color': this.primaryButton.BackgroundColor,
      width: this.primaryButton.Width + '%',
      'border-radius': this.primaryButton.CornerRadius + 'px',
      'padding-top': this.primaryButton.Padding.top + 'px',
      'padding-right': this.primaryButton.Padding.right + 'px',
      'padding-bottom': this.primaryButton.Padding.bottom + 'px',
      'padding-left': this.primaryButton.Padding.left + 'px',
      'margin-top': this.primaryButton.Margin.top + 'px',
      'margin-right': this.primaryButton.Margin.right + 'px',
      'margin-bottom': this.primaryButton.Margin.bottom + 'px',
      'margin-left': this.primaryButton.Margin.left + 'px',
    };
  }

  loadVersion(versionData: any): void {
    this.ibs.findPrimaryButton(versionData).subscribe((data: any) => {
      this.primaryButton = data;
      this.setInitialValues();
    });
  }

  // Event from child form
  changeTextColor(textColorData: any): void {
    textColorData = this.primaryButtonForm.get('TextColor')!.value;
  }

  changeBorderRadius(radiusData: any): void {
    radiusData = this.primaryButtonForm.get('CornerRadius')!.value;
  }

  changeBgColor(bgColorData: any): void {
    bgColorData = this.primaryButtonForm.get('BackgroundColor')!.value;
  }

  changeWidth(buttonWidthData: any): void {
    buttonWidthData = this.primaryButtonForm.get('Width')!.value;
  }

  changeIcon(data: any): void {
    data = this.primaryButtonForm.get('icon')?.setValue(data);
  }

  edit(): void {
    this.ess.showPrimaryButtonEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  onSubmit(): void {
    this.primaryButton.Version = this.primaryButtonForm.get('Version')?.value;
    this.primaryButton.Text = this.primaryButtonForm.get('Text')?.value;
    this.primaryButton.TextColor =
      this.primaryButtonForm.get('TextColor')?.value;
    // this.primaryButton.marginY = this.primaryButtonForm.get('marginY')?.value;
    this.primaryButton.CornerRadius =
      this.primaryButtonForm.get('CornerRadius')?.value;
    this.primaryButton.BackgroundColor =
      this.primaryButtonForm.get('BackgroundColor')?.value;
    this.primaryButton.Width = this.primaryButtonForm.get('Width')?.value;
    this.primaryButton.CommandName =
      this.primaryButtonForm.get('CommandName')?.value;
    this.primaryButton.CommandParameter =
      this.primaryButtonForm.get('CommandParameter')?.value;
    this.primaryButton.Padding.top = this.primaryButtonForm.get([
      'Padding',
      'top',
    ])?.value;
    this.primaryButton.Padding.right = this.primaryButtonForm.get([
      'Padding',
      'right',
    ])?.value;
    //Margin
    this.primaryButton.Margin.bottom = this.primaryButtonForm.get([
      'Margin',
      'bottom',
    ])?.value;
    this.primaryButton.Margin.left = this.primaryButtonForm.get([
      'Margin',
      'left',
    ])?.value;
    this.primaryButton.Margin.top = this.primaryButtonForm.get([
      'Margin',
      'top',
    ])?.value;
    this.primaryButton.Margin.right = this.primaryButtonForm.get([
      'Margin',
      'right',
    ])?.value;
    this.primaryButton.Margin.bottom = this.primaryButtonForm.get([
      'Margin',
      'bottom',
    ])?.value;
    this.primaryButton.Margin.left = this.primaryButtonForm.get([
      'Margin',
      'left',
    ])?.value;

    this.ibs
      .updatePrimaryButton(this.id, this.primaryButtonForm.value)
      .subscribe((res) => {
        console.log('Primary Button Updated!');
      });

    this.closeSidebar();
  }
}
