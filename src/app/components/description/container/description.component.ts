import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { DescriptionService } from '@app/components/description/service/description.service';
import { Description } from '@app/components/description/model/description.interface';
import { Colors } from '@app/services/colors/colors.interface';
import { ColorsService } from '@app/services/colors/colors.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  preview = 'Description';
  @Input() id!: number;
  luu: number = 1;
  description!: Description;
  colorPalettes!: Colors[];

  @Input()
  payload!: FormGroup;

  @Input()
  parent!: FormGroup;

  @Output()
  versionChanged = new EventEmitter();

  @Output()
  textColorChanged = new EventEmitter();

  @Output()
  backgroundColorChanged = new EventEmitter();

  // GET viewConfig FormArray and assign to 'descriptions' for use in *ngFor in template
  get descriptions(): any {
    return (this.parent.controls['payload'].get('viewConfig') as FormArray)
      .controls;
  }

  constructor(
    public ess: EditSidebarService,
    public ds: DescriptionService,
    private cs: ColorsService
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
  }

  copy(i: number) {
    const index = this.descriptions.at(i).value;
    console.log(index);
    this.ds.copy(index);
  }

  edit(i: number): void {
    this.ess.showDescriptionEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  // Event from child form
  loadVersion(version: any, i: number): void {
    const index = this.descriptions.at(i);
    this.ds.findDescriptioneConfig(version).subscribe((data: any) => {
      console.log(data);
      this.description = data;
      index.patchValue({
        Version: this.description.Version,
        Text: this.description.Text,
        TextColor: this.description.TextColor,
        BackgroundColor: this.description.BackgroundColor,
        Padding: {
          top: this.description.Padding.top,
          right: this.description.Padding.right,
          bottom: this.description.Padding.bottom,
          left: this.description.Padding.left,
        },
      });
    });
    this.versionChanged.emit(index);
  }

  // EMIT a new text color of the component to the editor
  setTextColor(color: any, i: number) {
    const index = this.descriptions.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      TextColor: color,
    });
  }

  // EMIT a new background color of the component to the editor
  setBackgroundColor(color: any, i: number) {
    const index = this.descriptions.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      BackgroundColor: color,
    });
  }

  // Event from child form
  // changePadding(data: any) {
  //   data = this.descriptionForm.get('Padding')!.value;
  // }

  // Saves component to API as individual component at current array index
  // ex: if index is a '1', then it will save to 'API/H1/1'
  saveComponent(i: number) {
    const index = this.descriptions.at(i);
    console.log(i);
    this.ds.updateDescriptionConfig(i, index.value).subscribe(() => {});
    this.closeSidebar();
  }
}
