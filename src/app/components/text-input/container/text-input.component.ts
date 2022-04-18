import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { SlimEntry } from '@app/components/text-input/model/slimentry.interface';
import { TextInputService } from '@app/components/text-input/service/text-input.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  preview = 'SlimEntry';
  id!: number;
  luu!: any;
  public slimEntry: SlimEntry = {
    id: this.luu,
    Version: '',
    IsRequired: false,
    IsPassword: false,
    GroupName: '',
    BackgroundColor: '',
    Borderless: false,
    FieldName: '',
    Placeholder: '',
    Type: 'text',
    Padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  slimEntryForm = this.fb.group({
    Version: '',
    IsRequired: false,
    IsPassword: false,
    GroupName: '',
    BackgroundColor: '',
    Borderless: 'standard',
    FieldName: '',
    Placeholder: '',
    Type: '',
    Padding: this.fb.group({
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    }),
  });

  constructor(
    public ess: EditSidebarService,
    private fb: FormBuilder,
    private ses: TextInputService
  ) {}

  ngOnInit(): void {
    this.id = 1;

    // Get the component config from JSON
    this.ses.getSlimEntry(this.id).subscribe((data: any) => {
      this.slimEntry = data;
      console.log('Slim Entry: ', this.slimEntry);
      this.setInitialValues();
    });

    this.luu = this.slimEntry.id;
  }

  copy() {
    this.ses.copy(this.slimEntry);
  }

  setInitialValues() {
    this.slimEntryForm.setValue({
      Version: this.slimEntry.Version,
      IsRequired: this.slimEntry.IsRequired,
      IsPassword: this.slimEntry.IsPassword,
      GroupName: this.slimEntry.GroupName,
      BackgroundColor: this.slimEntry.BackgroundColor,
      Borderless: this.slimEntry.Borderless,
      FieldName: this.slimEntry.FieldName,
      Placeholder: this.slimEntry.Placeholder,
      Type: this.slimEntry.Type,
      Padding: {
        top: this.slimEntry.Padding.top,
        right: this.slimEntry.Padding.right,
        bottom: this.slimEntry.Padding.bottom,
        left: this.slimEntry.Padding.left,
      },
    });
  }

  loadVersion(versionData: any): void {
    this.ses.findSlimEntry(versionData).subscribe((data: any) => {
      this.slimEntry = data;
      this.setInitialValues();
    });
  }

  edit(): void {
    this.ess.showTextInputEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  onSubmit(): void {
    this.slimEntry.Version = this.slimEntryForm.get('Version')!.value;
    this.slimEntry.IsRequired = this.slimEntryForm.get('IsRequired')!.value;
    this.slimEntry.IsPassword = this.slimEntryForm.get('IsPassword')!.value;
    this.slimEntry.GroupName = this.slimEntryForm.get('GroupName')!.value;
    this.slimEntry.BackgroundColor =
      this.slimEntryForm.get('BackgroundColor')!.value;
    this.slimEntry.Borderless = this.slimEntryForm.get('Borderless')!.value;
    this.slimEntry.FieldName = this.slimEntryForm.get('FieldName')!.value;
    this.slimEntry.Placeholder = this.slimEntryForm.get('Placeholder')!.value;
    this.slimEntry.Type = this.slimEntryForm.get('Type')!.value;
    this.slimEntry.Padding.top = this.slimEntryForm.get([
      'Padding',
      'top',
    ])!.value;
    this.slimEntry.Padding.right = this.slimEntryForm.get([
      'Padding',
      'right',
    ])!.value;
    this.slimEntry.Padding.bottom = this.slimEntryForm.get([
      'Padding',
      'bottom',
    ])!.value;
    this.slimEntry.Padding.left = this.slimEntryForm.get([
      'Padding',
      'left',
    ])!.value;

    this.ses
      .updateSlimEntry(this.slimEntry.id, this.slimEntryForm.value)
      .subscribe((res) => {
        console.log('SlimEntry Updated!');
        this.closeSidebar();
      });

    console.log('Slim Entry configuration: ', this.slimEntry);
  }
}
