import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
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
        Version: this.slimEntry.version,
        IsRequired: this.slimEntry.configuration_json.IsRequired,
        IsPassword: this.slimEntry.configuration_json.IsPassword,
        GroupName: this.slimEntry.configuration_json.GroupName,
        BackgroundColor: this.slimEntry.configuration_json.BackgroundColor,
        Borderless: this.slimEntry.configuration_json.Borderless,
        FieldName: this.slimEntry.configuration_json.FieldName,
        Placeholder: this.slimEntry.configuration_json.Placeholder,
        Type: this.slimEntry.configuration_json.Type,
        Padding: {
          top: this.slimEntry.configuration_json.Padding.top,
          right: this.slimEntry.configuration_json.Padding.right,
          bottom: this.slimEntry.configuration_json.Padding.bottom,
          left: this.slimEntry.configuration_json.Padding.left,
        },
      });
    });
    this.versionChanged.emit(index);
  }

  saveComponent(i: number) {
    const index = this.slimEntries.at(i);
    let versionUpdate = index.get('version')!.value;
    index.patchValue({
      version: Math.round(versionUpdate + 1),
    });
    console.log(i);
    this.ses.updateSlimEntry(i, index.value).subscribe(() => {});
    this.closeSidebar();
  }
}
