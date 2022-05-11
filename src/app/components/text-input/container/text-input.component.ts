import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  slimEntry!: SlimEntry;
  isChecked: any = false;

  @Input()
  payload!: FormGroup;

  @Input()
  parent!: FormGroup;

  @Output()
  versionChanged = new EventEmitter();

  get slimEntries(): any {
    return (this.parent.get('slimEntryConfig') as FormArray).controls;
  }

  constructor(public ess: EditSidebarService, private ses: TextInputService) {}

  ngOnInit(): void {}

  copy(i: number) {
    const index = this.slimEntries.at(i).value;
    console.log(index);
    this.ses.copy(index);
  }

  edit(i: number): void {
    this.ess.showTextInputEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  loadVersion(version: any, i: number): void {
    const index = this.slimEntries.at(i);
    this.ses.findSlimEntry(version).subscribe((data: any) => {
      console.log(data);
      this.slimEntry = data;
      index.patchValue({
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
    });
    this.versionChanged.emit(index);
  }

  saveComponent(i: number) {
    const index = this.slimEntries.at(i);
    console.log(i);
    this.ses.updateSlimEntry(i, index.value).subscribe(() => {});
    this.closeSidebar();
  }
}
